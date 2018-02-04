#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    for( int i=0; i<700; i++){
        floatbox newbox;
        newbox.setInit();
        boxs.push_back(newbox);
    }
    ofBackground(0);
    starlight.setPointLight();
    starlight.setPosition(0,0,0);
}

//--------------------------------------------------------------
void ofApp::update(){
    for(int i = 0; i < boxs.size(); i++){
        boxs[i].update();
        
    }
}

//--------------------------------------------------------------
void ofApp::draw(){
    cam.begin();
    ofEnableBlendMode(OF_BLENDMODE_ADD);
    ofSetColor(0, 0, 0);
    for(int i = 0; i < boxs.size(); i++){
        boxs[i].draw();
    }
    cam.end();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
