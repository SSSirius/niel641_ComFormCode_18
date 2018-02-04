#pragma once
#include "ofMain.h"

class floatbox
{
public:
    floatbox();
    virtual ~floatbox(){};

    void setInit();
   
    void update();
    void draw();
    ofVec3f pos1,pos2;
    float len;
    float bh,bw;
    float speed;
    ofColor col;
    float height1,height2;
    
};
