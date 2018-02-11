#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetFrameRate(15);
    ofBackground(0);
     param.setup(); 
    ofSetCircleResolution(200);
    for( int i=0; i<200; i++){
        dis.push_back(ofRandom(200-i));
        //        cout <<ofRandom(1) <<endl;
    }
    gui.setup();
//    gui.add(showface.setup("Face", false));
//    gui.add(showdata.setup("Data", false));
//            gui.add(ini_z.setup("ini_Z",20,0,50));
//            gui.add(colr.setup("color_r",255,0,255));
    gui.add(colb.setup("color",150,0,255));
//          gui.add(colg.setup("color_g",150,0,255));
        gui.add(lifes.setup("density",170,50,300));
    gui.add(scale.setup("scale",50,40,80));
  
    gui.add(degree.setup("spin",12,5,15));
    //      setInitialCondition(0,0,0);
}

//--------------------------------------------------------------
void ofApp::update(){
    param.colr= colr;
    param.colg =colg;
    param.colb = colb;
    param.degree= degree;
    param.size=scale;
    param.dens=lifes;
}

//--------------------------------------------------------------
void ofApp::draw(){
 gui.draw();
    count++;
    ofPushMatrix;
    
    ofTranslate(ofGetWidth(),0);
    ofScale(-1,1,1);
    ofPopMatrix;

    ofPushMatrix;
    cam.begin();
    
    for(int i = 0; i < param.size; i++){
        star newstar;
        newstar.setInitialCondition(i*param.ew,i*param.eh,i,param.size,param.degree,dis);
        stars.push_back(newstar);
        
    }
    
    for(int i = 0; i < stars.size(); i++){
        stars[i].draw();
        
    }
    cam.end();
    ofPopMatrix;
    stars.clear();
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
