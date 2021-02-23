//
//  Node.cpp
//  2100.Project3
//
//  Created by Caleb Halter on 7/22/19.
//  Copyright © 2019 Caleb Halter. All rights reserved.
//

#include "Node.hpp"

Node::Node(std::string input) {
    data = input;
    explored = false;
    Predecessor = NULL;
}

Node& Node::operator=(const Node& oldNode) {
    this->data = oldNode.data;
    for (Node* x : oldNode.edges) {
        this->edges.push_back(x);
    }
    this->explored = oldNode.explored;
    this->Predecessor = oldNode.Predecessor;
    return *this;
}

Node::Node(const Node& oldNode) {
    this->data = oldNode.data;
    for (Node* x : oldNode.edges) {
        this->edges.push_back(x);
    }
    this->explored = oldNode.explored;
    this->Predecessor = oldNode.Predecessor;
}
Node::~Node() {
    for (Node* x : edges) {
        x = NULL;
    }
    Predecessor = NULL;
}
