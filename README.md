# vs-component-app

**How much time do you spend copying and pasting the component folder to create a new one ?**<br />
Visual studio code extension to create react components base on [create-component-app](https://github.com/CVarisco/create-component-app) library<br />


## Usage

<p align="center">
  <img src="https://user-images.githubusercontent.com/7335613/28039065-44f14f88-65c1-11e7-98ef-ff4cf5dc6d18.gif" alt="vs-component-app" width="1024" />
</p>

1) Create a config object `ccarc` on user preference like

2) Right click on folder destination where you want your new component.
3) Insert name of the component.
4) Enjoy :taco:

## Install 

```
ext install vs-component-app
```

## Configuration
Create a config object `ccarc` on user preference.  
```json
{
    "ccarc": {   
        "type": "stateless",
        "jsExtension": "js",
        "cssExtension": "css",
        "includeTests": false,
        "includeStories": false,
        "indexFile": false,
        "connected": false,
    }
}
```

### You can use your own custom templates

Create a config object `ccarc` on user preference

```json
{   
    "ccarc": {   
        "type": "custom",
        "templatesPath": "PATH/OF/CUSTOM/TEMPLATE/FOLDER"
    }
}
```

[Here](https://github.com/CVarisco/create-component-app/blob/master/docs/CUSTOM-TEMPLATES.md) you can find the documentation on how to write your own custom templates

## Contributing
The library is open to everybody, contribute improve your skills.   

`vs-component-app` is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## License

MIT © [Christian Varisco](https://github.com/CVarisco)