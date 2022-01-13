# WIP (Building Features)

# Installation
`$ npm i -g @nomadmystic/drupal-scaffold-module`

> NOTA: This packages uses node version 16.x internally, but this has been tested using 14.x

# Commands
`$ drupal-scaffold-build`

* This one command will scaffold a new module into the `./web/modules/custom/` folder.
* To run this command you will need to be in the root Drupal install folder.
* User Prompts:
  * `Machine Name (string)`, you will typically want to use snake_case for you machine name, but there is no validation for that at this point.
  * `Admin Name (string)`, This is the name you can find in the /modules admin list page. To install search for Admin Name and install
  * `Discription (string`, This is used throughout the scaffold, .info file as example
  * `Webpack Build (boolean)`, This option is selected 'yes' by default. If set to 'yes' front-end build system will the scaffold along with the base Drupal module files/

`$ drupal-scaffold-add`

This command will scaffold a new class and YML in the `./web/modules/custom/MODULE_NAME` folder. Class that can be added.
* Command
* Controller
* EventSubscriber
* Form
* Plugin (Maybe)
* TwigExtension
* User Prompts:
  * `Machine Name (string)`, This uses autocomplete and fuzzy logic to find your module in the customs folder.
  * `Class file (list)`, You can select from the list of options and this will scaffold a new class/YML properties for you
  * `Class Name (string)`, Type of the name of the class you want to create.

---
# @todos:
* Scaffolding folder
  * Add base hooks
  * Update README
  * Add inline Drupal doc for ease of access
  * Update Yaml files based on scaffolded classes

### Future additions:
* Mention debug in global config

# General Notes:
* https://www.drupal.org/docs/creating-custom-modules/let-drupal-know-about-your-module-with-an-infoyml-file
* class namespaces = Drupal\machine_name\SrcFolderName
* Figure out what base hooks we want to add to the scaffolding?
* https://github.com/mokkabonna/inquirer-autocomplete-prompt
* https://www.npmjs.com/package/inquirer
