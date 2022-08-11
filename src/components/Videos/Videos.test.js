import React from "react";
import renderer from "react-test-renderer";
import Videos from './Videos'

test('Videos Empty Renders Sorry, no videos found', ()=>{
    const tree = renderer.create(<Videos />).toJSON();
    expect(tree).toMatchSnapshot();
})

test('Videos 1 Item Renders Correctly', ()=>{
    const tree = renderer.create(<Videos videos={["Exxen"]}/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('Videos 3 Items Renders Correctly', ()=>{
    const tree = renderer.create(<Videos videos={["Udemy", "Youtube", "Tutorial"]}/>).toJSON();
    expect(tree).toMatchSnapshot();
})