//
//  Graph.hpp
//  2100.Project3
//
//  Created by Caleb Halter on 7/22/19.
//  Copyright © 2019 Caleb Halter. All rights reserved.
//

#ifndef Graph_hpp
#define Graph_hpp

#include <stdio.h>
#include <stdexcept>
#include <vector>
#include <string>
#include <fstream>
#include <iostream>
#include <queue>
#include <stack>
#include "Node.hpp"

class Graph {
public:
    Graph();
    Graph& operator=(const Graph& oldGraph);
    Graph(const Graph& oldGraph);
    ~Graph();
    int PopulateGraph(std::string dictionary);
    void FindEdges(Node* node);
    std::string WordSearchMenu(std::string word1, std::string word2);
    std::vector<Node*> WordSearch (std::string word1, std::string word2);
    void ExitScreen();
private:
    std::vector<std::vector<Node*> > graph;
};

#endif /* Graph_hpp */
