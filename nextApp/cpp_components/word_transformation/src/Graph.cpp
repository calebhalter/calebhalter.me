//
//  Graph.cpp
//  2100.Project3
//
//  Created by Caleb Halter on 7/22/19.
//  Copyright © 2019 Caleb Halter. All rights reserved.
//

#include "Graph.hpp"
#include <filesystem>

using namespace std;

Graph::Graph() {
    for (int i = 0; i < 16; i++) {
        vector<Node*> temp;
        graph.push_back(temp);
    }
}

Graph& Graph::operator=(const Graph& oldGraph) {
    this->graph.clear();
    for (vector<Node*> v : graph) {
        vector<Node*> temp;
        for (Node* n : v) {
            temp.push_back(n);
        }
        this->graph.push_back(temp);
    }
    return *this;
}

Graph::Graph(const Graph& oldGraph) {
    this->graph.clear();
    for (vector<Node*> v : graph) {
        vector<Node*> temp;
        for (Node* n : v) {
            temp.push_back(n);
        }
        this->graph.push_back(temp);
    }
}

Graph::~Graph() {
    for (vector<Node*> v : graph) {
        for (Node* n : v) {
            delete n;
        }
        v.clear();
    }
}

int Graph::PopulateGraph(std::string dictionary) {
    ifstream inFile;
    inFile.open("cpp_module_data/wordlist.txt");
    if (!inFile.is_open())
        return -35;
    
    string nextWord;
    Node* temp = NULL;
    int i=0;
    while (getline(inFile, nextWord)) {
        temp = new Node(nextWord);
        
        // If an excessively long word is input, it will be accomodated
        try {
            FindEdges(temp);
            graph.at(nextWord.size()).push_back(temp);
        i++;
        } catch (std::out_of_range& x) {
            for (int i=graph.size(); i <= nextWord.size(); i++){
                vector<Node*> tempVector;
                graph.push_back(tempVector);
            }
            graph.at(nextWord.size()).push_back(temp);
        }
    }
    return i;
}

void Graph::FindEdges(Node* node) {
    /*
        adding any Node whose data is 1 letter away from input Node's data.
        tally keeps track of the number of identical letters.
        wrongLetter allows the program to end the comparison early if two
        differences are found between the two words. If tally is equal to
        the number of letters in the input node minus one after the for-loop,
        an edge will be created between the two words.
    */
    int tally;
    bool wrongLetter;
    int wordLength = node->data.size();
    for (Node* n : graph.at(wordLength)) {
        tally = 0;
        wrongLetter = false;
        for (int i=0; i < wordLength; i++) {
            if (!(n->data.at(i) == node->data.at(i))) {
                if (wrongLetter == false)
                    wrongLetter = true;
                else
                    break;
            }
            else
                tally++;
        }
        if (tally == wordLength - 1){
            node->edges.push_back(n);
            n->edges.push_back(node);
        }
    }
}

std::string Graph::WordSearchMenu(std::string word1, std::string word2) {
    
    // variables for user input
    char option = 'z';
    string input;
    
    // vector stores shortest path from source to destination word
    vector<Node*> shortestPath;
    shortestPath.clear();
    
    // menu allowing user to input WordSearch queries
    /*while (1) {
        cout << "Would you like to enter a query?";
        cout << " (enter 'y' for yes and 'n' for no)" << endl;
        getline(cin, input);
        if (input.empty())
            option = 'z';
        else
            option = input.front();
        
        // switch loops until valid input is entered
        bool switchOn = true;
        while (switchOn) {
            switch (option) {
                case 'y':
                    switchOn = false;
                    break;
                    
                case 'n':
                    switchOn = false;
		    cout << "\033[2J";
		    ExitScreen();
                    return;
                    
                default:
                    cout << "Error: invalid input" << endl << endl;
                    cout << "Would you like to enter a query?";
                    cout << " (enter 'y' for yes and 'n' for no)" << endl;
                    getline(cin, input);
                    if (input.empty())
                        option = 'z';
                    else
                        option = input.front();
            }
        }*/
        
        // if user selects yes in menu
        /*cout << "Enter first word: ";
        getline(cin, word1);
        cout << "Enter second word: ";
        getline(cin, word2);*/
	char temp;
	for (int i=0; i < (int)word1.size(); i++) {
	    temp = word1.at(i);
	    temp = tolower(temp);
	    word1.at(i) = temp;
	    if (i < (int)word2.size()) {
		temp = word2.at(i);
		temp = tolower(temp);
		word2.at(i) = temp;
	    }
	}
    shortestPath = WordSearch(word1, word2);
    std::string returnStr = "";
    if (shortestPath.empty()) {
        returnStr += "Sorry, but it is not possible to transform ";
        returnStr +=  word1 + " into " + word2 + ".\n";
    }
    else {
        returnStr +=  "It is possible to transform ";
        returnStr += word1 + " into " + word2 + ". ";
        returnStr +=  "The shortest path is:\n";
        for (int i=0; i < (int)shortestPath.size(); i++) {
            if (i > 0)
                returnStr += " -> ";
            returnStr += shortestPath.at(i)->data;
        }
    }
    return returnStr;
}

vector<Node*> Graph::WordSearch(string word1, string word2) {
    // return vector will be clear until the path is found
    // it will be returned empty if no path exists
    vector<Node*> shortestPath;
    
    // checking validity of input
    // checking if word1's size is represented in the graph
    if (word1.size() > graph.size())
        return shortestPath;
    // checking if input words have the same size
    if (word1.size() != word2.size())
        return shortestPath;
    
    // finding word1 node
    Node* word1Node = nullptr;
    
    for (Node* n : graph.at(word1.size())) {
        if (n->data == word1)
            word1Node = n;
    }
    
    // if word1Node is equal to nullptr, the word doesn't exist
    if (word1Node == nullptr)
        return shortestPath;
    
    /*
        A breadth-first search is performed for word2.
        A temporary tree is built to keep a search history.
        The tree data is stored in the searched nodes and
        deleted after the search is completed.
    */
    Node* currentNode;
    Node* word2Node = NULL;
    queue<Node*> toBeSearched;
    vector<Node*> exploredNodes;
    
    word1Node->explored = true;
    exploredNodes.push_back(word1Node);
    toBeSearched.push(word1Node);
    while (toBeSearched.size() != 0) {
        currentNode = toBeSearched.front();
        for (Node* n : currentNode->edges) {
            if (n->explored == false) {
                n->Predecessor = currentNode;
                exploredNodes.push_back(n);
		toBeSearched.push(n);
                if (n->data == word2) {
                    word2Node = n;
                    break;
                }
                n->explored = true;
            }
        }
        if (word2Node != nullptr)
            break;
        toBeSearched.pop();
    }
    
    // it toBeSearched is empty, word2 wasn't found
    if (toBeSearched.empty()) {
        // erasing search tree
        for (Node* n : exploredNodes) {
            n->Predecessor = NULL;
            n->explored = false;
        }
        return shortestPath;
    }
    
    /*
        recording the successfull search path by stepping back
        through word2's Predecessors
    */
    stack<Node*> nodeStack;
    currentNode = word2Node;
    nodeStack.push(word2Node);
    while (currentNode->Predecessor != nullptr) {
        nodeStack.push(currentNode->Predecessor);
        currentNode = currentNode->Predecessor;
    }
    while (!nodeStack.empty()) {
        shortestPath.push_back(nodeStack.top());
        nodeStack.pop();
    }
    // erasing search tree
    for (Node* n : exploredNodes) {
        n->Predecessor = NULL;
        n->explored = false;
    }
    return shortestPath;
}

/*void Graph::ExitScreen() {
    ifstream exitScreen;
    ifstream exitScreen2;
    exitScreen.open("ProgramData/ExitScreen.txt");
    exitScreen2.open("ProgramData/ExitScreen2.txt");

    string nextLine;
    int currentLine = 1;
    string space (60, ' ');
    while (getline(exitScreen, nextLine)) {
	cout << nextLine;
	if (currentLine >= 12 && getline(exitScreen2, nextLine)) {
	    cout << space << nextLine;
	}	
	cout << endl;
	currentLine++;
    }
    cout << endl;

    exitScreen.close();
    exitScreen2.close();

}*/
