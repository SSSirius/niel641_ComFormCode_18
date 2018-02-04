#include "circle.hpp"


floatbox:: floatbox(){

}

void floatbox::update(){
    pos1.z+=speed*ofMap(ofGetMouseX(),0,ofGetWidth(),1,5);
    pos2.z+=speed*ofMap(ofGetMouseX(),0,ofGetWidth(),1,5);
    if(pos1.z >len+200){
        pos1.z=-ofGetWidth()*2;
    }
    if(pos2.z >len+200){
        pos2.z=-ofGetWidth()*2;
    }
    
    pos1.y=sin(ofGetElapsedTimef())*100+height1;
     pos2.y=cos(ofGetElapsedTimef())*100+height2;
}
void  floatbox::setInit(){
    speed=ofRandom(20,40);
    pos1.x=ofRandom(20,ofGetWidth()*0.3);
    pos1.z= max(ofRandom(-ofGetWidth()*5), ofRandom(-ofGetWidth()*5));
    pos1.y=ofRandom(-ofGetHeight(),ofGetHeight());
    pos2.x=ofRandom(-20,-ofGetWidth()*0.3);
    pos2.z= max(ofRandom(-ofGetWidth()*5), ofRandom(-ofGetWidth()*5));
    pos2.y=ofRandom(-ofGetHeight(),ofGetHeight());
        height1=pos1.y;
    height2=pos2.y;
    col = ofColor::fromHsb(ofRandom(127,255), ofRandom(127,255), ofRandom(150,255));
    len = ofRandom(100,500);
    bw =ofRandom(2,10);
    bh =(ofRandom(5,30)+ofRandom(5,30))*0.5;
   
    
}
void  floatbox::draw(){
    ofSetColor(col);
    ofPushMatrix();
    if(pos1.z>-200){
        ofRotateY(ofMap(pos1.z, -300,len+200, 0, 12));}
    ofDrawBox(pos1,bw, bh, len);
    ofPopMatrix();
   
    ofPushMatrix();
    if(pos2.z>-200){
        ofRotateY(ofMap(pos2.z, -300,len+200, 0, -12));}
     ofDrawBox(pos2,bw, bh, len);
    ofPopMatrix();
    
    
}

