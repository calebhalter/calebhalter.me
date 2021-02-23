//
//  index.cpp
//  
//
//  Created by Caleb Halter on 9/22/20.
//

#include <napi.h>
#include <node.h>
#include <vector>
#include <iostream>
#include <chrono>
#include "Graph.hpp"

#define NAPI_EXPERIMENTAL

// number of AppVars
int keyRing = 100;

// all global variables stored here
typedef struct {
    Graph theGraph;
} AppVars;

std::string runProg(std::string word1, std::string word2, AppVars* app) {
    std::string returnStr = "Something went wrong...";
    returnStr = app->theGraph.WordSearchMenu(word1, word2);
    return (returnStr);
}

Napi::String wordTransform(const Napi::CallbackInfo& info) {
    
    // getting key
    std::string keyString = (std::string) info[0].ToString();
    int key = stoi(keyString);
    
    // importing global data
    Napi::Env env = info.Env();
    void* data;
    napi_get_instance_data(env, &data);
    AppVars* app;
    app = (AppVars*)data;
        
    // printing value at key location
    std::string result = runProg( (std::string) info[2].ToString(), (std::string)info[3].ToString(), app ) ;
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
    AppVars* app = new(AppVars);
    
    int num = app->theGraph.PopulateGraph("dictionary");

    // saving for global use
    napi_set_instance_data(env, app, DeleteAddonData, NULL);

    exports.Set(
        Napi::String::New(env, "wordTransform"),
        Napi::Function::New(env, wordTransform)
    );
    
    return exports;
}

NODE_API_MODULE(greet, Init)
//NAPI_MODULE_INIT()

