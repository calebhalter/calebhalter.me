//
//  main.cpp
//  2100.Project3
//
//  Created by Caleb Halter on 7/22/19.
//  Copyright © 2019 Caleb Halter. All rights reserved.
//

#include <iostream>
#include <chrono>
#include "Graph.hpp"

using namespace std;

int main(int argc, const char * argv[]) {
    try {
	// graph object and input file
        Graph theGraph;
	string dictionary;

	// receiving input
        dictionary = "wordlist.txt";

	// running program
        theGraph.PopulateGraph(dictionary);
        theGraph.WordSearchMenu();
        //cout << endl;

    // generic error catching        
    } catch (const char* s) {
        //cout << "Error: " << s << endl << endl;
    }
}
