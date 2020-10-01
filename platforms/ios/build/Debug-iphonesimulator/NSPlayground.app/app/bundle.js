require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./views/list/list-page.css": "./views/list/list-page.css",
	"./views/list/list-page.js": "./views/list/list-page.js",
	"./views/list/list-page.xml": "./views/list/list-page.xml",
	"./views/login/login-page.css": "./views/login/login-page.css",
	"./views/login/login-page.js": "./views/login/login-page.js",
	"./views/login/login-page.xml": "./views/login/login-page.xml",
	"./views/shared/config.js": "./views/shared/config.js",
	"./views/shared/utils/hint-util.js": "./views/shared/utils/hint-util.js",
	"./views/shared/utils/status-bar-util.js": "./views/shared/utils/status-bar-util.js",
	"./views/shared/view-models/grocery-list-view-model.js": "./views/shared/view-models/grocery-list-view-model.js",
	"./views/shared/view-models/user-view-model.js": "./views/shared/view-models/user-view-model.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"views/login/login-page\"></Frame>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".test"],"declarations":[{"type":"declaration","property":"color","value":"green"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        let applicationModule = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
applicationModule.run({ moduleName: "app-root" });; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"app.js","name":"nativescript-template-groceries","version":"3.0.0"};

/***/ }),

/***/ "./views/list/list-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".add-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"padding","value":"5"}]},{"type":"rule","selectors":[".add-bar Image"],"declarations":[{"type":"declaration","property":"height","value":"15"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"}]},{"type":"rule","selectors":[".add-bar TextField"],"declarations":[{"type":"declaration","property":"padding","value":"10"}]},{"type":"rule","selectors":["Label"],"declarations":[{"type":"declaration","property":"background-color","value":"blueviolet"},{"type":"declaration","property":"border-bottom-width","value":"1"},{"type":"declaration","property":"border-bottom-color","value":"gray"},{"type":"declaration","property":"padding-bottom","value":"10%"},{"type":"declaration","property":"padding-left","value":"5"},{"type":"declaration","property":"font-size","value":"30%"},{"type":"declaration","property":"color","value":"orange"}]},{"type":"rule","selectors":[".delete-view"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"padding","value":"20"}]},{"type":"rule","selectors":[".delete-view Image"],"declarations":[{"type":"declaration","property":"color","value":"skyblue"}]},{"type":"rule","selectors":["ListView"],"declarations":[{"type":"declaration","property":"opacity","value":"0"}]},{"type":"rule","selectors":[".visible"],"declarations":[{"type":"declaration","property":"animation-name","value":"show"},{"type":"declaration","property":"animation-duration","value":"5s"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"}]},{"type":"keyframes","name":"show","keyframes":[{"type":"keyframe","values":["from"],"declarations":[{"type":"declaration","property":"opacity","value":"0"}]},{"type":"keyframe","values":["to"],"declarations":[{"type":"declaration","property":"opacity","value":"1"}]}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/list/list-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./views/list/list-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/list/list-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var dialogsModule = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
var observableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js")
var ObservableArray = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js").ObservableArray;
var GroceryListViewModel = __webpack_require__("./views/shared/view-models/grocery-list-view-model.js");
var page;

var groceryList = new GroceryListViewModel([]);

var pageData = new observableModule.fromObject({
    groceryList: groceryList,
    grocery: "",
    isLoading: false,
    listLoaded: false
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = pageData;

    groceryList.empty();
    pageData.set("isLoading", true);
    groceryList.load().then(function () {
        pageData.set("isLoading", false);
        pageData.set("listLoaded", true);
    });
};

exports.add = function () {
    //checks for empty string
    pageData.set("isLoading", true);
    if (pageData.get("grocery").trim() === "") {
        dialogsModule.alert({
            message: "Enter a grocery item",
            okButtonText: "OK"
        });
        pageData.set("isLoading", false);
        return;
    }

    // Dismiss the keyboard
    page.getViewById("grocery").dismissSoftInput();
    groceryList.add(pageData.get("grocery"))
        .catch(function () {
            dialogsModule.alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
        });

    // Empty the input field
    pageData.set("grocery", "");
    pageData.set("isLoading", false);

};

exports.onSwipeCellStarted = function (args) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args.object;
    var rightItem = swipeView.getViewById('delete-view');
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.left = 0;
    swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
};

exports.delete = function (args) {
    var item = args.view.bindingContext;
    var index = groceryList.indexOf(item);
    groceryList.delete(index);
};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/list/list-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/list/list-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/list/list-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-ui-listview", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/RadListView.itemTemplate", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/RadListView", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });
global.registerModule("nativescript-ui-listview/RadListView.itemSwipeTemplate", function() { return __webpack_require__("../node_modules/nativescript-ui-listview/ui-listview.js"); });

module.exports = "<Page loaded=\"loaded\" xmlns:lv=\"nativescript-ui-listview\">\n    <ActionBar title=\"Groceries\"></ActionBar>\n    <GridLayout rows=\"auto, *\">\n        <GridLayout row=\"0\" columns=\"*, auto\" class=\"add-bar\">\n            <TextField text=\"{{ grocery }}\" id=\"grocery\" hint=\"Enter a grocery item\" col=\"0\" />\n            <Image src=\"~/images/add.png\" tap=\"add\" col=\"1\"/>\n        </GridLayout>\n        <lv:RadListView items=\"{{ groceryList }}\" class=\"{{ listLoaded ? 'visible' : '' }}\" row=\"1\" itemSwipeProgressStarted=\"onSwipeCellStarted\" swipeActions=\"true\">  \n            <lv:RadListView.itemTemplate>\n                <GridLayout class=\"grocery-list-item\">\n                    <Label class=\"p-10\" text=\"{{ name }}\"/>\n                </GridLayout>\n            </lv:RadListView.itemTemplate>\n            <lv:RadListView.itemSwipeTemplate>\n                <GridLayout columns=\"*,auto\" backgroundColor=\"black\">\n                    <StackLayout id=\"delete-view\" col=\"1\" tap=\"delete\" class=\"delete-view\">\n                        <Image src=\"~/images/delete.png\" />\n                    </StackLayout>\n                </GridLayout>\n            </lv:RadListView.itemSwipeTemplate>\n        </lv:RadListView>\n    <ActivityIndicator busy=\"{{ isLoading }}\" row=\"1\" horizontalAlignment=\"center\" verticalAlignment=\"center\" />\n    </GridLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/list/list-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/list/list-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/login/login-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":[".test"],"declarations":[{"type":"declaration","property":"color","value":"green"}]},{"type":"rule","selectors":["FlexboxLayout"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"declaration","property":"background-image","value":"url(\"~/images/background.jpg\")"}]},{"type":"rule","selectors":["StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"300"},{"type":"declaration","property":"padding","value":"10 16"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"},{"type":"declaration","property":"height","value":"70"}]},{"type":"rule","selectors":["Button","TextField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"}]},{"type":"rule","selectors":["TextField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"#C4AFB4"},{"type":"declaration","property":"color","value":"black"}]},{"type":"rule","selectors":[".dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#301217"}]},{"type":"rule","selectors":[".dark TextField"],"declarations":[{"type":"declaration","property":"color","value":"#C4AFB4"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./views/login/login-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/login/login-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var dialogsModule = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");
var frameModule = __webpack_require__("../node_modules/@nativescript/core/ui/frame/frame.js");

var page;
var email;

var UserViewModel = __webpack_require__("./views/shared/view-models/user-view-model.js");
var user = new UserViewModel({
    email: "mcarey0442@gmail.com",
    password: "password",
    isLoading: true,
});

exports.loaded = function (args) {
    page = args.object;
    page.actionBarHidden = true;
    isLoggingIn = user.isLoggingIn;
    page.bindingContext = user;

};

exports.toggleDisplay = function () {
    isLoggingIn = !isLoggingIn;
    user.set('isLoggingIn', isLoggingIn);
};

exports.submit = function () {

    if (isLoggingIn) {
        login();

    } else {
        signUp();
    }
};

function login() {
    user.set("isLoading", true);
    user.login()
        .catch(function (error) {
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            user.set("isLoading", false);
            return Promise.reject();
        })
        .then(function () {
            frameModule.Frame.topmost().navigate("views/list/list-page");
            user.set("isLoading", false);

        });
};

function signUp() {
    user.register()
        .then(function () {
            dialogsModule
                .alert("Your account was successfully created.")
                .then(function () {
                    exports.toggleDisplay();
                });
        }).catch(function (error) {
            dialogsModule
                .alert({
                    message: "Unfortunately we were unable to create your account.",
                    okButtonText: "OK"
                });
        });
};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/login/login-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/login/login-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"loaded\">\n<ActionBar title=\"Groceries\"></ActionBar>\n    <FlexboxLayout>\n          <StackLayout id=\"form\" class=\"{{ isLoggingIn ? 'form' : 'form dark' }}\" orientation=\"vertical\">\n            <Image src=\"~/images/Hot-Dogs.jpg\" />\n\n            <TextField class=\"input input-border\" id=\"email\" text=\"{{ email }}\" hint=\"Email Address\" keyboardType=\"email\" autocorrect=\"false\" autocapitalizationType=\"none\" />\n            <TextField class=\"input input-border\" secure=\"true\" text=\"{{ password }}\" hint=\"Password\" />\n\n            <Button class=\"btn btn-primary\" text=\"{{ isLoggingIn ? 'Sign in' : 'Sign up' }}\" tap=\"submit\" />\n            <Button text=\"{{ isLoggingIn ? 'Sign up' : 'Back to login' }}\" class=\"link\" tap=\"toggleDisplay\" />\n            <ActivityIndicator busy=\"{{ isLoading }}\" color=\"red\" row=\"1\" horizontalAlignment=\"center\" verticalAlignment=\"center\" />\n\n           </StackLayout>\n    </FlexboxLayout>\n</Page> "; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/login/login-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/config.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {
  apiUrl: "https://baas.kinvey.com/",
  appKey: "kid_HyHoT_REf",
  appUserHeader: "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ"
};
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/config.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/config.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/utils/hint-util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/utils/hint-util.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/utils/hint-util.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/utils/status-bar-util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
var platform = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
var utils = __webpack_require__("../node_modules/@nativescript/core/utils/utils.js");

exports.setStatusBarColors = function() {
  // Make the iOS status bar transparent with white text.
  // See https://github.com/burkeholland/nativescript-statusbar/issues/2
  // for details on the technique used.
  if (application.ios) {
    var AppDelegate = UIResponder.extend({
      applicationDidFinishLaunchingWithOptions: function() {
        UIApplication.sharedApplication.statusBarStyle = UIStatusBarStyle.LightContent;
        return true;
      }
    }, {
        name: "AppDelegate",
        protocols: [UIApplicationDelegate]
      });
    application.ios.delegate = AppDelegate;
  }

  // Make the Android status bar transparent.
  // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
  // for details on the technique used.
  if (application.android) {
    application.android.onActivityStarted = function() {
      if (application.android && platform.device.sdkVersion >= "21") {
        var View = android.view.View;
        var window = application.android.startActivity.getWindow();
        window.setStatusBarColor(0x000000);

        var decorView = window.getDecorView();
        decorView.setSystemUiVisibility(
          View.SYSTEM_UI_FLAG_LAYOUT_STABLE
          | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
          | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
          | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
      }
    }
  }
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/utils/status-bar-util.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/utils/status-bar-util.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/view-models/grocery-list-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var config = __webpack_require__("./views/shared/config.js");
var fetchModule = __webpack_require__("../node_modules/@nativescript/core/fetch/fetch.js");
var ObservableArray = __webpack_require__("../node_modules/@nativescript/core/data/observable-array/observable-array.js").ObservableArray;

function GroceryListViewModel(items) {
  var baseUrl = config.apiUrl + "appdata/" + config.appKey + "/Groceries";
  var viewModel = new ObservableArray(items);

    viewModel.load = function () {
        return fetch(baseUrl, {
            headers: getCommonHeaders()
        })
            .then(handleErrors)
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                data.forEach(function (grocery) {
                    viewModel.push({
                        name: grocery.Name,
                        id: grocery._id
                    });
                });
            });
    };




    viewModel.empty = function () {
        while (viewModel.length) {
            viewModel.pop();
        }
    };


    viewModel.add = function (grocery) {
        return fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({
                Name: grocery
            }),
            headers: getCommonHeaders()
        })
            .then(handleErrors)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                viewModel.push({ name: grocery, id: data._id });
            });
    };

    viewModel.delete = function (index) {
        return fetch(baseUrl + "/" + viewModel.getItem(index).id, {
            method: "DELETE",
            headers: getCommonHeaders()
        })
            .then(handleErrors)
            .then(function () {
                viewModel.splice(index, 1);
            });
    };





  return viewModel;
}




function getCommonHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": "Kinvey " + config.token
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(JSON.stringify(response));
    throw Error(response.statusText);
  }
  return response;
}

module.exports = GroceryListViewModel;; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/view-models/grocery-list-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/view-models/grocery-list-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/view-models/user-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var config = __webpack_require__("./views/shared/config.js");
var fetchModule = __webpack_require__("../node_modules/@nativescript/core/fetch/fetch.js");
var observableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");

function User(info) {
  info = info || {};

  // You can add properties to observables on creation
    var viewModel = new observableModule.fromObject({
        email: info.email || "",
        password: info.password || "",
        isLoggingIn: true
    });

    viewModel.login = function () {
        return fetchModule.fetch(config.apiUrl + "user/" + config.appKey + "/login", {
            method: "POST",
            body: JSON.stringify({
                username: viewModel.get("email"),
                password: viewModel.get("password")
            }),
            headers: getCommonHeaders()
        })
            .then(handleErrors)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                config.token = data._kmd.authtoken;
            });
    };

  viewModel.register = function() {
    if (!viewModel.get("email") || !viewModel.get("password")) {
      return Promise.reject(new Error("Please provide both an email address and password."));
    }
    
    return fetchModule.fetch(config.apiUrl + "user/" + config.appKey, {
      method: "POST",
      body: JSON.stringify({
        username: viewModel.get("email"),
        email: viewModel.get("email"),
        password: viewModel.get("password")
      }),
      headers: getCommonHeaders()
    }).then(handleErrors);
} ;

  return viewModel;
}

function getCommonHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": config.appUserHeader
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(JSON.stringify(response));
    throw Error(response.statusText);
  }
  return response;
}

module.exports = User;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/view-models/user-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/view-models/user-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9saXN0L2xpc3QtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9saXN0L2xpc3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi92aWV3cy9zaGFyZWQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvc2hhcmVkL3V0aWxzL3N0YXR1cy1iYXItdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvZ3JvY2VyeS1saXN0LXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL3VzZXItdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUU7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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a0IsbUJBQU8sQ0FBQyxtREFBd0I7QUFDbEQsdUJBQXVCLG1CQUFPLENBQUMsa0VBQWtDOztBQUVqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQix3RUFBd0U7QUFDbkcsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS5jc3NcIjogXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmNzc1wiLFxuXHRcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuanNcIjogXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS54bWxcIjogXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5jc3NcIjogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuY3NzXCIsXG5cdFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzXCI6IFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiOiBcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC9jb25maWcuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC9jb25maWcuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy9ncm9jZXJ5LWxpc3Qtdmlldy1tb2RlbC5qc1wiOiBcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL2dyb2NlcnktbGlzdC12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsLmpzXCI6IFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfGt0fCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJ2aWV3cy9sb2dpbi9sb2dpbi1wYWdlXFxcIj48L0ZyYW1lPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC1yb290LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2FwcC1yb290LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGVzdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiZ3JlZW5cIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vYXBwLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbiAgICAgICAgICAgIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svbG9hZC1hcHBsaWNhdGlvbi1jc3MtcmVndWxhclwiKSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGhtclVwZGF0ZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svaG1yXCIpLmhtclVwZGF0ZTtcbiAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMgPSBnbG9iYWwuX19vbkxpdmVTeW5jO1xuXG4gICAgICAgICAgICBnbG9iYWwuX19vbkxpdmVTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBMaXZlU3luY1xuICAgICAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2ggPSBmdW5jdGlvbih7IHR5cGUsIHBhdGggfSA9IHt9KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGhvdCB1cGRhdGVzIGFyZSBhcHBsaWVkLCBhc2sgdGhlIG1vZHVsZXMgdG8gYXBwbHkgdGhlIGNoYW5nZXNcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyh7IHR5cGUsIHBhdGggfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gaW5pdGlhbCBhcHAgc3RhcnRcbiAgICAgICAgICAgIGhtclVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHJlcXVpcmUuY29udGV4dChcIn4vXCIsIHRydWUsIC8oPzwhXFxiQXBwX1Jlc291cmNlc1xcYi4qKSg/PCFcXC5cXC9cXGJ0ZXN0c1xcYlxcLy4qPylcXC4oeG1sfGNzc3xqc3xrdHwoPzwhXFwuZFxcLil0c3woPzwhXFxiX1tcXHctXSpcXC4pc2NzcykkLyk7XG4gICAgICAgICAgICBnbG9iYWwucmVnaXN0ZXJXZWJwYWNrTW9kdWxlcyhjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoY29udGV4dC5pZCwgKCkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJITVI6IEFjY2VwdCBtb2R1bGUgJ1wiICsgY29udGV4dC5pZCArIFwiJyBmcm9tICdcIiArIG1vZHVsZS5pZCArIFwiJ1wiKTsgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTtcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG5hcHBsaWNhdGlvbk1vZHVsZS5ydW4oeyBtb2R1bGVOYW1lOiBcImFwcC1yb290XCIgfSk7OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2FwcC5qc1wiIH0pO1xuICAgIH0pO1xufSBcbiAgICBcbiAgICAgICAgXG4gICAgICAgICIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hZGQtYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNDQjFEMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hZGQtYmFyIEltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2ZXJ0aWNhbC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hZGQtYmFyIFRleHRGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcImJsdWV2aW9sZXRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20tY29sb3JcIixcInZhbHVlXCI6XCJncmF5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1ib3R0b21cIixcInZhbHVlXCI6XCIxMCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMzAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJvcmFuZ2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGVsZXRlLXZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGVsZXRlLXZpZXcgSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInNreWJsdWVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJMaXN0Vmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnZpc2libGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tbmFtZVwiLFwidmFsdWVcIjpcInNob3dcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZHVyYXRpb25cIixcInZhbHVlXCI6XCI1c1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFuaW1hdGlvbi1maWxsLW1vZGVcIixcInZhbHVlXCI6XCJmb3J3YXJkc1wifV19LHtcInR5cGVcIjpcImtleWZyYW1lc1wiLFwibmFtZVwiOlwic2hvd1wiLFwia2V5ZnJhbWVzXCI6W3tcInR5cGVcIjpcImtleWZyYW1lXCIsXCJ2YWx1ZXNcIjpbXCJmcm9tXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1widG9cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifV19XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcbnZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpXG52YXIgT2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpLk9ic2VydmFibGVBcnJheTtcbnZhciBHcm9jZXJ5TGlzdFZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvdmlldy1tb2RlbHMvZ3JvY2VyeS1saXN0LXZpZXctbW9kZWxcIik7XG52YXIgcGFnZTtcblxudmFyIGdyb2NlcnlMaXN0ID0gbmV3IEdyb2NlcnlMaXN0Vmlld01vZGVsKFtdKTtcblxudmFyIHBhZ2VEYXRhID0gbmV3IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgZ3JvY2VyeUxpc3Q6IGdyb2NlcnlMaXN0LFxuICAgIGdyb2Nlcnk6IFwiXCIsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBsaXN0TG9hZGVkOiBmYWxzZVxufSk7XG5cbmV4cG9ydHMubG9hZGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHBhZ2VEYXRhO1xuXG4gICAgZ3JvY2VyeUxpc3QuZW1wdHkoKTtcbiAgICBwYWdlRGF0YS5zZXQoXCJpc0xvYWRpbmdcIiwgdHJ1ZSk7XG4gICAgZ3JvY2VyeUxpc3QubG9hZCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBwYWdlRGF0YS5zZXQoXCJpc0xvYWRpbmdcIiwgZmFsc2UpO1xuICAgICAgICBwYWdlRGF0YS5zZXQoXCJsaXN0TG9hZGVkXCIsIHRydWUpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9jaGVja3MgZm9yIGVtcHR5IHN0cmluZ1xuICAgIHBhZ2VEYXRhLnNldChcImlzTG9hZGluZ1wiLCB0cnVlKTtcbiAgICBpZiAocGFnZURhdGEuZ2V0KFwiZ3JvY2VyeVwiKS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgZGlhbG9nc01vZHVsZS5hbGVydCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICB9KTtcbiAgICAgICAgcGFnZURhdGEuc2V0KFwiaXNMb2FkaW5nXCIsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERpc21pc3MgdGhlIGtleWJvYXJkXG4gICAgcGFnZS5nZXRWaWV3QnlJZChcImdyb2NlcnlcIikuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgIGdyb2NlcnlMaXN0LmFkZChwYWdlRGF0YS5nZXQoXCJncm9jZXJ5XCIpKVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGlhbG9nc01vZHVsZS5hbGVydCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIC8vIEVtcHR5IHRoZSBpbnB1dCBmaWVsZFxuICAgIHBhZ2VEYXRhLnNldChcImdyb2NlcnlcIiwgXCJcIik7XG4gICAgcGFnZURhdGEuc2V0KFwiaXNMb2FkaW5nXCIsIGZhbHNlKTtcblxufTtcblxuZXhwb3J0cy5vblN3aXBlQ2VsbFN0YXJ0ZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICB2YXIgc3dpcGVWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnZGVsZXRlLXZpZXcnKTtcbiAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgc3dpcGVMaW1pdHMubGVmdCA9IDA7XG4gICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG59O1xuXG5leHBvcnRzLmRlbGV0ZSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgdmFyIGl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG4gICAgdmFyIGluZGV4ID0gZ3JvY2VyeUxpc3QuaW5kZXhPZihpdGVtKTtcbiAgICBncm9jZXJ5TGlzdC5kZWxldGUoaW5kZXgpO1xufTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9SYWRMaXN0Vmlldy5pdGVtVGVtcGxhdGVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9SYWRMaXN0Vmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L1JhZExpc3RWaWV3Lml0ZW1Td2lwZVRlbXBsYXRlXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiKTsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcImxvYWRlZFxcXCIgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkdyb2Nlcmllc1xcXCI+PC9BY3Rpb25CYXI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sICpcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93PVxcXCIwXFxcIiBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiBjbGFzcz1cXFwiYWRkLWJhclxcXCI+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCB0ZXh0PVxcXCJ7eyBncm9jZXJ5IH19XFxcIiBpZD1cXFwiZ3JvY2VyeVxcXCIgaGludD1cXFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9hZGQucG5nXFxcIiB0YXA9XFxcImFkZFxcXCIgY29sPVxcXCIxXFxcIi8+XFxuICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8bHY6UmFkTGlzdFZpZXcgaXRlbXM9XFxcInt7IGdyb2NlcnlMaXN0IH19XFxcIiBjbGFzcz1cXFwie3sgbGlzdExvYWRlZCA/ICd2aXNpYmxlJyA6ICcnIH19XFxcIiByb3c9XFxcIjFcXFwiIGl0ZW1Td2lwZVByb2dyZXNzU3RhcnRlZD1cXFwib25Td2lwZUNlbGxTdGFydGVkXFxcIiBzd2lwZUFjdGlvbnM9XFxcInRydWVcXFwiPiAgXFxuICAgICAgICAgICAgPGx2OlJhZExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcImdyb2NlcnktbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwicC0xMFxcXCIgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9sdjpSYWRMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPGx2OlJhZExpc3RWaWV3Lml0ZW1Td2lwZVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLGF1dG9cXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiYmxhY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJkZWxldGUtdmlld1xcXCIgY29sPVxcXCIxXFxcIiB0YXA9XFxcImRlbGV0ZVxcXCIgY2xhc3M9XFxcImRlbGV0ZS12aWV3XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9kZWxldGUucG5nXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvbHY6UmFkTGlzdFZpZXcuaXRlbVN3aXBlVGVtcGxhdGU+XFxuICAgICAgICA8L2x2OlJhZExpc3RWaWV3PlxcbiAgICA8QWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwie3sgaXNMb2FkaW5nIH19XFxcIiByb3c9XFxcIjFcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgLz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpKTttb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5uYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJibGFja1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGVzdFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiZ3JlZW5cIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJGbGV4Ym94TGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwianVzdGlmeS1jb250ZW50XCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYWxpZ24taXRlbXNcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLXNpemVcIixcInZhbHVlXCI6XCJjb3ZlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcIn4vaW1hZ2VzL2JhY2tncm91bmQuanBnXFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJTdGFja0xheW91dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMzAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEwIDE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmMGYwZjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJJbWFnZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjcwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uXCIsXCJUZXh0RmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnlcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0NCMUQwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJUZXh0RmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwbGFjZWhvbGRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNDNEFGQjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRhcmtcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwMTIxN1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5kYXJrIFRleHRGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0M0QUZCNFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIGRpYWxvZ3NNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xudmFyIGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5cbnZhciBwYWdlO1xudmFyIGVtYWlsO1xuXG52YXIgVXNlclZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsXCIpO1xudmFyIHVzZXIgPSBuZXcgVXNlclZpZXdNb2RlbCh7XG4gICAgZW1haWw6IFwibWNhcmV5MDQ0MkBnbWFpbC5jb21cIixcbiAgICBwYXNzd29yZDogXCJwYXNzd29yZFwiLFxuICAgIGlzTG9hZGluZzogdHJ1ZSxcbn0pO1xuXG5leHBvcnRzLmxvYWRlZCA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgcGFnZSA9IGFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICBpc0xvZ2dpbmdJbiA9IHVzZXIuaXNMb2dnaW5nSW47XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHVzZXI7XG5cbn07XG5cbmV4cG9ydHMudG9nZ2xlRGlzcGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpc0xvZ2dpbmdJbiA9ICFpc0xvZ2dpbmdJbjtcbiAgICB1c2VyLnNldCgnaXNMb2dnaW5nSW4nLCBpc0xvZ2dpbmdJbik7XG59O1xuXG5leHBvcnRzLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmIChpc0xvZ2dpbmdJbikge1xuICAgICAgICBsb2dpbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2lnblVwKCk7XG4gICAgfVxufTtcblxuZnVuY3Rpb24gbG9naW4oKSB7XG4gICAgdXNlci5zZXQoXCJpc0xvYWRpbmdcIiwgdHJ1ZSk7XG4gICAgdXNlci5sb2dpbigpXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpYWxvZ3NNb2R1bGUuYWxlcnQoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIsXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdXNlci5zZXQoXCJpc0xvYWRpbmdcIiwgZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZyYW1lTW9kdWxlLkZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZShcInZpZXdzL2xpc3QvbGlzdC1wYWdlXCIpO1xuICAgICAgICAgICAgdXNlci5zZXQoXCJpc0xvYWRpbmdcIiwgZmFsc2UpO1xuXG4gICAgICAgIH0pO1xufTtcblxuZnVuY3Rpb24gc2lnblVwKCkge1xuICAgIHVzZXIucmVnaXN0ZXIoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaWFsb2dzTW9kdWxlXG4gICAgICAgICAgICAgICAgLmFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpYWxvZ3NNb2R1bGVcbiAgICAgICAgICAgICAgICAuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcImxvYWRlZFxcXCI+XFxuPEFjdGlvbkJhciB0aXRsZT1cXFwiR3JvY2VyaWVzXFxcIj48L0FjdGlvbkJhcj5cXG4gICAgPEZsZXhib3hMYXlvdXQ+XFxuICAgICAgICAgIDxTdGFja0xheW91dCBpZD1cXFwiZm9ybVxcXCIgY2xhc3M9XFxcInt7IGlzTG9nZ2luZ0luID8gJ2Zvcm0nIDogJ2Zvcm0gZGFyaycgfX1cXFwiIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvSG90LURvZ3MuanBnXFxcIiAvPlxcblxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgaWQ9XFxcImVtYWlsXFxcIiB0ZXh0PVxcXCJ7eyBlbWFpbCB9fVxcXCIgaGludD1cXFwiRW1haWwgQWRkcmVzc1xcXCIga2V5Ym9hcmRUeXBlPVxcXCJlbWFpbFxcXCIgYXV0b2NvcnJlY3Q9XFxcImZhbHNlXFxcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVxcXCJub25lXFxcIiAvPlxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcImlucHV0IGlucHV0LWJvcmRlclxcXCIgc2VjdXJlPVxcXCJ0cnVlXFxcIiB0ZXh0PVxcXCJ7eyBwYXNzd29yZCB9fVxcXCIgaGludD1cXFwiUGFzc3dvcmRcXFwiIC8+XFxuXFxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB0ZXh0PVxcXCJ7eyBpc0xvZ2dpbmdJbiA/ICdTaWduIGluJyA6ICdTaWduIHVwJyB9fVxcXCIgdGFwPVxcXCJzdWJtaXRcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJ7eyBpc0xvZ2dpbmdJbiA/ICdTaWduIHVwJyA6ICdCYWNrIHRvIGxvZ2luJyB9fVxcXCIgY2xhc3M9XFxcImxpbmtcXFwiIHRhcD1cXFwidG9nZ2xlRGlzcGxheVxcXCIgLz5cXG4gICAgICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3IgYnVzeT1cXFwie3sgaXNMb2FkaW5nIH19XFxcIiBjb2xvcj1cXFwicmVkXFxcIiByb3c9XFxcIjFcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgLz5cXG5cXG4gICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvRmxleGJveExheW91dD5cXG48L1BhZ2U+IFwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwaVVybDogXCJodHRwczovL2JhYXMua2ludmV5LmNvbS9cIixcbiAgYXBwS2V5OiBcImtpZF9IeUhvVF9SRWZcIixcbiAgYXBwVXNlckhlYWRlcjogXCJCYXNpYyBhMmxrWDBoNVNHOVVYMUpGWmpvMU1Ua3hNREpsWldGaE16UTBNek15T0RGak4yTXlPRE0zTUdRNU9USXpNUVwiXG59O1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3NoYXJlZC9jb25maWcuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9zaGFyZWQvY29uZmlnLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zaGFyZWQvdXRpbHMvaGludC11dGlsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc2hhcmVkL3V0aWxzL2hpbnQtdXRpbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpO1xudmFyIHV0aWxzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIik7XG5cbmV4cG9ydHMuc2V0U3RhdHVzQmFyQ29sb3JzID0gZnVuY3Rpb24oKSB7XG4gIC8vIE1ha2UgdGhlIGlPUyBzdGF0dXMgYmFyIHRyYW5zcGFyZW50IHdpdGggd2hpdGUgdGV4dC5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9idXJrZWhvbGxhbmQvbmF0aXZlc2NyaXB0LXN0YXR1c2Jhci9pc3N1ZXMvMlxuICAvLyBmb3IgZGV0YWlscyBvbiB0aGUgdGVjaG5pcXVlIHVzZWQuXG4gIGlmIChhcHBsaWNhdGlvbi5pb3MpIHtcbiAgICB2YXIgQXBwRGVsZWdhdGUgPSBVSVJlc3BvbmRlci5leHRlbmQoe1xuICAgICAgYXBwbGljYXRpb25EaWRGaW5pc2hMYXVuY2hpbmdXaXRoT3B0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIFVJQXBwbGljYXRpb24uc2hhcmVkQXBwbGljYXRpb24uc3RhdHVzQmFyU3R5bGUgPSBVSVN0YXR1c0JhclN0eWxlLkxpZ2h0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkFwcERlbGVnYXRlXCIsXG4gICAgICAgIHByb3RvY29sczogW1VJQXBwbGljYXRpb25EZWxlZ2F0ZV1cbiAgICAgIH0pO1xuICAgIGFwcGxpY2F0aW9uLmlvcy5kZWxlZ2F0ZSA9IEFwcERlbGVnYXRlO1xuICB9XG5cbiAgLy8gTWFrZSB0aGUgQW5kcm9pZCBzdGF0dXMgYmFyIHRyYW5zcGFyZW50LlxuICAvLyBTZWUgaHR0cDovL2JyYWRtYXJ0aW4ubmV0LzIwMTYvMDMvMTAvZnVsbHNjcmVlbi1hbmQtbmF2aWdhdGlvbi1iYXItY29sb3ItaW4tYS1uYXRpdmVzY3JpcHQtYW5kcm9pZC1hcHAvXG4gIC8vIGZvciBkZXRhaWxzIG9uIHRoZSB0ZWNobmlxdWUgdXNlZC5cbiAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcbiAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uQWN0aXZpdHlTdGFydGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCAmJiBwbGF0Zm9ybS5kZXZpY2Uuc2RrVmVyc2lvbiA+PSBcIjIxXCIpIHtcbiAgICAgICAgdmFyIFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICAgICAgdmFyIHdpbmRvdyA9IGFwcGxpY2F0aW9uLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKDB4MDAwMDAwKTtcblxuICAgICAgICB2YXIgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xuICAgICAgICBkZWNvclZpZXcuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KFxuICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXG4gICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9zaGFyZWQvdXRpbHMvc3RhdHVzLWJhci11dGlsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBjb25maWcgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiKTtcbnZhciBmZXRjaE1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZldGNoXCIpO1xudmFyIE9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG5cbmZ1bmN0aW9uIEdyb2NlcnlMaXN0Vmlld01vZGVsKGl0ZW1zKSB7XG4gIHZhciBiYXNlVXJsID0gY29uZmlnLmFwaVVybCArIFwiYXBwZGF0YS9cIiArIGNvbmZpZy5hcHBLZXkgKyBcIi9Hcm9jZXJpZXNcIjtcbiAgdmFyIHZpZXdNb2RlbCA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoaXRlbXMpO1xuXG4gICAgdmlld01vZGVsLmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChiYXNlVXJsLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBnZXRDb21tb25IZWFkZXJzKClcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGhhbmRsZUVycm9ycylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChncm9jZXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGdyb2NlcnkuTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBncm9jZXJ5Ll9pZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cblxuXG5cbiAgICB2aWV3TW9kZWwuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdoaWxlICh2aWV3TW9kZWwubGVuZ3RoKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucG9wKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICB2aWV3TW9kZWwuYWRkID0gZnVuY3Rpb24gKGdyb2NlcnkpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGJhc2VVcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgTmFtZTogZ3JvY2VyeVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiBnZXRDb21tb25IZWFkZXJzKClcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGhhbmRsZUVycm9ycylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwucHVzaCh7IG5hbWU6IGdyb2NlcnksIGlkOiBkYXRhLl9pZCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2aWV3TW9kZWwuZGVsZXRlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBmZXRjaChiYXNlVXJsICsgXCIvXCIgKyB2aWV3TW9kZWwuZ2V0SXRlbShpbmRleCkuaWQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IGdldENvbW1vbkhlYWRlcnMoKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oaGFuZGxlRXJyb3JzKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuXG5cblxuXG4gIHJldHVybiB2aWV3TW9kZWw7XG59XG5cblxuXG5cbmZ1bmN0aW9uIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gIHJldHVybiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgXCJBdXRob3JpemF0aW9uXCI6IFwiS2ludmV5IFwiICsgY29uZmlnLnRva2VuXG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuICAgIHRocm93IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICB9XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm9jZXJ5TGlzdFZpZXdNb2RlbDs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL2dyb2NlcnktbGlzdC12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL2dyb2NlcnktbGlzdC12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsInZhciBjb25maWcgPSByZXF1aXJlKFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiKTtcbnZhciBmZXRjaE1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZldGNoXCIpO1xudmFyIG9ic2VydmFibGVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7XG5cbmZ1bmN0aW9uIFVzZXIoaW5mbykge1xuICBpbmZvID0gaW5mbyB8fCB7fTtcblxuICAvLyBZb3UgY2FuIGFkZCBwcm9wZXJ0aWVzIHRvIG9ic2VydmFibGVzIG9uIGNyZWF0aW9uXG4gICAgdmFyIHZpZXdNb2RlbCA9IG5ldyBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xuICAgICAgICBlbWFpbDogaW5mby5lbWFpbCB8fCBcIlwiLFxuICAgICAgICBwYXNzd29yZDogaW5mby5wYXNzd29yZCB8fCBcIlwiLFxuICAgICAgICBpc0xvZ2dpbmdJbjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdmlld01vZGVsLmxvZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hNb2R1bGUuZmV0Y2goY29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIGNvbmZpZy5hcHBLZXkgKyBcIi9sb2dpblwiLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB2aWV3TW9kZWwuZ2V0KFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHZpZXdNb2RlbC5nZXQoXCJwYXNzd29yZFwiKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBoZWFkZXJzOiBnZXRDb21tb25IZWFkZXJzKClcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGhhbmRsZUVycm9ycylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25maWcudG9rZW4gPSBkYXRhLl9rbWQuYXV0aHRva2VuO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICB2aWV3TW9kZWwucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXZpZXdNb2RlbC5nZXQoXCJlbWFpbFwiKSB8fCAhdmlld01vZGVsLmdldChcInBhc3N3b3JkXCIpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIikpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZmV0Y2hNb2R1bGUuZmV0Y2goY29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIGNvbmZpZy5hcHBLZXksIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB2aWV3TW9kZWwuZ2V0KFwiZW1haWxcIiksXG4gICAgICAgIGVtYWlsOiB2aWV3TW9kZWwuZ2V0KFwiZW1haWxcIiksXG4gICAgICAgIHBhc3N3b3JkOiB2aWV3TW9kZWwuZ2V0KFwicGFzc3dvcmRcIilcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczogZ2V0Q29tbW9uSGVhZGVycygpXG4gICAgfSkudGhlbihoYW5kbGVFcnJvcnMpO1xufSA7XG5cbiAgcmV0dXJuIHZpZXdNb2RlbDtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgcmV0dXJuIHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkF1dGhvcml6YXRpb25cIjogY29uZmlnLmFwcFVzZXJIZWFkZXJcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcnMocmVzcG9uc2UpIHtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4gICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXI7XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL3VzZXItdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy91c2VyLXZpZXctbW9kZWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==