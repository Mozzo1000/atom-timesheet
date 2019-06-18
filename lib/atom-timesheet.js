'use babel';

import { CompositeDisposable } from 'atom';
import { get_year, get_month, get_day, get_time, get_timezone } from './time.js'

var date_format = '\n' + get_year() + '-' + get_month() + '-' + get_day() + ':';
var time_format = '\n' + get_time() + ' ';

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-timesheet:init_file': () => this.init_file()
    }));
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'atom-timesheet:new_entry': () => this.new_entry()
    }));
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'atom-timesheet:stop_entry': () => this.stop_entry()
    }));
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'atom-timesheet:continue_last_entry': () => this.continue_last_entry()
    }));
    this.subscriptions.add(atom.commands.add('atom-text-editor', {
      'atom-timesheet:add_new_timezone': () => this.add_new_timezone()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  init_file() {
    //Need to add a check for if file already exists in current project,
    //if it does exists, prompt to create a new one or rename file
    //to something else.

    atom.workspace.open('timesheet.txt').then(tab => {
      tab.insertText('TZ ' + get_timezone())
      tab.insertText('\n' + date_format + time_format)
      //we might save it here automatically as well. tab.save()
    });
  },

  new_entry() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      currentPos = editor.getCursorBufferPosition();
      editor.moveToBottom();

      if (!editor.getText().includes(date_format)) {
        editor.insertText(date_format)
      }
      editor.insertText(time_format)
      editor.setCursorBufferPosition(currentPos)
    }
  },

  stop_entry() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      currentPos = editor.getCursorBufferPosition();
      editor.moveToBottom();

      editor.insertText('\n' + get_time() + '.')
      editor.setCursorBufferPosition(currentPos)
    }
  },

  continue_last_entry() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      currentPos = editor.getCursorBufferPosition();
      editor.moveToBottom();

      editor.insertText('\n' + get_time() + '^')
      editor.setCursorBufferPosition(currentPos)
    }
  },
  add_new_timezone() {
    const editor = atom.workspace.getActiveTextEditor()
    if (editor) {
      currentPos = editor.getCursorBufferPosition();
      editor.moveToBottom();

      editor.insertText('\nTZ ' + get_timezone())
      editor.setCursorBufferPosition(currentPos)
    }
  }
};
