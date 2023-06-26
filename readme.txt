Explain why i added specificied package:
    "ts-jest": this is packge for jest can handle tsx, and ts file when test process running
    "identity-obj-proxy": This module essentially is for testing imports that may not affect your unit tests.
    "jest-environment-jsdom": this module is use for running a simulator dom by js, because we haven't configured Jest run test for with a browser
#General rules of structure:
    + Parent - child: Do not allow use child component in any where except the directly parent
    + Global: Global components can be able to use any where
#About structure:
    views: Where define component for specificied path in browser
    ui: UI component for use in everywhere
    store: Where you put all Redux stuff
        + Sub Directories: 
    assets: 

└──"src":
    │
    ├──"assets": store media file
    │
    ├──"views":
    │   └──{path browser name}:
    ├──"store"
    │   └──{event name}
    │       ├──{event name".reducer.ts"}
    │       ├──{event name".action.ts"}
    │       └──{event name".state.ts"}
    ├──"ui": store all global UI components
        └──