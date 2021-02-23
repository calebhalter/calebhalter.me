//
//  index.cpp
//  
//
//  Created by Caleb Halter on 9/22/20.
//

#include <napi.h>
#include <node.h>
#include <vector>
#include "greeting.h"

#define NAPI_EXPERIMENTAL

// number of AppVars
int keyRing = 100;

// all global variables stored here
typedef struct {
  double value;
} AppVars;

AppVars BlankApp() {
    AppVars blankApp;
    
    // set default values
    blankApp.value = 0;
    
    // return new blank app
    return blankApp;
}

Napi::String greetHello(const Napi::CallbackInfo& info) {
    
    // getting key
    std::string keyString = (std::string) info[0].ToString();
    int key = stoi(keyString);
    
    // importing global data
    Napi::Env env = info.Env();
    void* data;
    napi_get_instance_data(env, &data);
    AppVars* importVars;
    importVars = (AppVars*)data;
    
    // resetting if app needs to be reset
    if (stoi((std::string)info[1].ToString()) == 1) {
        importVars[key-1] = BlankApp();
    }
    
    // incrementing target struct
    importVars[key-1].value++;
    
    // printing value at key location
    std::string result = helloUser( std::to_string(importVars[key-1].value) ) ;
    return Napi::String::New(env, result);
}

static void DeleteAddonData(napi_env env, void* data, void* hint) {
  // Avoid unused parameter warnings.
  (void) env;
  (void) hint;

  // Free the per-addon-instance data.
    free(data);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    // globally used AppVars array
    // stores all user data
    AppVars* app = (AppVars*)malloc(sizeof(AppVars) * keyRing);
    
    // populating with default data
    for (int i=0; i < keyRing; i++) {
        app[0] = BlankApp();
    }

    // saving for global use
    napi_set_instance_data(env, app, DeleteAddonData, NULL);

    exports.Set(
        Napi::String::New(env, "greetHello"),
        Napi::Function::New(env, greetHello)
    );
    
    return exports;
}

NODE_API_MODULE(greet, Init)
//NAPI_MODULE_INIT()

