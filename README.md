# WIP (Very much)



# Installation
`npm i -g @nomadmystic/drupal-scaffold-module`

# Commands
`drupal-scaffold-build`

This command will scaffold a new module in the `./web/modules/custom/` folder.

`drupal-scaffold-add`

This command will scaffold a new class and YML in the `./web/modules/custom/MODULE_NAME` folder. Class that can be added.
* Command
* Controller
* EventSubscriber
* Form
* Plugin (Maybe)
* TwigExtension

---
# @todos:
* Scaffolding folder
  * Add base Drupal files
  * Add Webpack
  * Add base hooks
  * Add module class folders


### Future additions:
* Mention debug in global config

# General Notes:
* https://www.drupal.org/docs/creating-custom-modules/let-drupal-know-about-your-module-with-an-infoyml-file
* class namespaces = Drupal\machine_name\SrcFolderName
* Figure out what base hooks we want to add to the scaffolding?
* // https://github.com/mokkabonna/inquirer-autocomplete-prompt
