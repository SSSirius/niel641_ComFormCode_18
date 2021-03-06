#pragma once

#include "ofMain.h"
#include "ofxGui.h"
#include "stars.hpp"
#include "Params.hpp"
class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void mouseEntered(int x, int y);
		void mouseExited(int x, int y);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
//    vector <planet> planets;
    vector<star> stars;
    vector<float> dis;
    
    ofEasyCam cam;
    int count=0;
    ofxPanel gui;
//    ofxFaceTracker2 tracker;
    ofVideoGrabber grabber;
    ofxToggle showface,showdata;
    ofxLabel datapanel;
    ofxFloatSlider ini_z,colb,colr,colg,lifes,degree,dens,scale;
    //    float colr;
    vector <float> mouths;
    vector <float> mouthups;
    vector <float> noses;
    vector <float> eyesizes;
    vector <float> eyedists;
    vector <float> faces;
    //    vector <float> mouths;
    float mouth,mouthup,nose,eyesize,eyedist,face;
//    float ew,eh,degree;
    int size;
//    Calc calculat;
};
