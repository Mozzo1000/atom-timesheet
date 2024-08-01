# atom-timesheet

> [!IMPORTANT]
> As of december 2022, Atom is no longer being maintained. This project is therefor put into archive mode.

An atom package for editing of [timesheet.txt](https://github.com/scy/timesheet.txt) files.
Easily create new timesheet files with everything necessary already written for you. Add or stop time entries with keyboard shortcuts.

## Features
* Initial file creation
* Keyboard shortcuts
* Automatically get the current timezone (can be manually overridden)

## Installation
### Command line
In the terminal, install the package via apm:

`apm install atom-timesheet`
### GUI
Open settings in Atom, search for `atom-timesheet` under the install tab.

## Menu
You can either use the context menu or the normal menu under the "Package" tab to,
* Create a new timesheet.
  * Will automatically write timezone and current date and time into file. File will be named `timesheet.txt`
* Create a new entry in current file.
  * If todays date does not exists it will automatically create both the date and time for the entry otherwise only time.
* Stop last entry in current file.
* Continue last entry in current file.
* Add a new timezone.
  * Will automatically retrieve the current timezone and write to file, can be manually overridden in the settings in Atom if necessary.

## Keybindings
Note, these are default values and can be changed inside of Atom.
* **ctrl-alt-n** : Create a new entry.
* **ctrl-alt-s** : End the last entry.
* **ctrl-alt-c** : Continue the last entry.

## Specification
As of writing (2019-06-18), there is no official specification outlining what and how a timesheet.txt file should be formatted or handled. This work is therefor based on examples and code implementation that exists in the repository [timesheet.txt](https://github.com/scy/timesheet.txt) and the [vim-timesheet](https://github.com/scy/vim-timesheet) package.
This package will be updated accordingly to reflect the state of [timesheet.txt](https://github.com/scy/timesheet.txt).

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
