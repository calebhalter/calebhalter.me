//
//  Node.hpp
//  2100.Project3
//
//  Created by Caleb Halter on 7/22/19.
//  Copyright © 2019 Caleb Halter. All rights reserved.
//

#ifndef Node_hpp
#define Node_hpp

#include <stdio.h>
#include <vector>
#include <string>

struct Node {
public:
    // functions
    Node(std::string input);
    Node& operator=(const Node& oldNode);
    Node(const Node& oldNode);
    ~Node();
    
    // permanent data
    std::string data;
    std::vector<Node*> edges;
    
    // temporary search data
    bool explored;
    Node* Predecessor;
};

#endif /* Node_hpp */
