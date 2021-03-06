import { createStackNavigator } from "react-navigation";
import React from 'react';
import {Button} from 'react-native';
import HomePage from "../page/HomePage";
import Page1 from "../page/Page1";
import Page2 from "../page/Page2";
import Page3 from "../page/Page3";
import Page4 from "../page/Page4";
import Page5 from "../page/Page5";
export const AppStackNavigator = createStackNavigator({
        HomePage:{
            screen:HomePage
        },
        Page1:{
            screen:Page1,
            navigationOptions:({navigation})=>({
                title:  `${navigation.state.params.name}页面名`,
                headerLeft:(
                    <Button 
                        title='返回'
                        onPress={()=>{
                            navigation.goBack()
                          }}
                    />
                )

            })
        },
        Page2:{
            screen:Page2,
            navigationOptions:({navigation})=>({
                title:  'This i s page2'
            })
        },
        Page3:{
            screen:Page3,
            navigationOptions:(props)=>{
                const {navigation} = props;
                const {state,setParams} = navigation;
                const {params} = state;
                return {
                    title:params.title?params.title:'This is page3',
                    headerRight:(
                        <Button 
                            title={params.mode ==='edit'?'保存':'编辑'}
                            onPress={()=>setParams({
                                mode:params.mode==='edit'?'':'edit'
                            })}
                        />
                    )
                }
            }
        },
        Page4:{
            screen:Page4,
            navigationOptions:({navigation})=>({
                title:  'This i s page4'
            })
        },
});
