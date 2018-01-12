//
//  CallPhoneModuleIos.m
//  reactNavigationDemo
//
//  Created by Ward Wong on 2018/1/12.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "CallPhoneModuleIos.h"
#import "LiveRoomViewController.h"
#import "AppDelegate.h"

@implementation CallPhoneModuleIos
  
  RCT_EXPORT_MODULE(CallPhoneModuleIos);
  
  RCT_EXPORT_METHOD(callPhone: (NSString *)phone){
    
    NSLog(@"======%@",phone);
    //去掉注释，下面代码就是实现拨号功能代码，但还未真机测试
    //  NSMutableString * str = [[NSMutableString alloc] initWithFormat:@"telprompt://%@",phone];
    //  [[UIApplication sharedApplication] openURL:[NSURL URLWithString:str]];
    NSLog(@"RN传入原生界面的数据为:%@",phone);
    //主要这里必须使用主线程发送,不然有可能失效
    dispatch_async(dispatch_get_main_queue(), ^{
      LiveRoomViewController *one = [[LiveRoomViewController alloc]init];
      
      AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
      
      [app.nav pushViewController:one animated:YES];
    });

  }
  
  RCT_EXPORT_METHOD(call: (NSString *)phone
                    response:(RCTResponseSenderBlock)response
                    error:(RCTResponseErrorBlock)error){
    
    NSLog(@"======%@",phone);
    //去掉注释，下面代码就是实现拨号功能代码，但还未真机测试
    //  NSMutableString * str = [[NSMutableString alloc] initWithFormat:@"telprompt://%@",phone];
    //  [[UIApplication sharedApplication] openURL:[NSURL URLWithString:str]];
    NSLog(@"RN传入原生界面的数据为:%@",phone);
    NSUInteger num = phone.length;
    (num>2) ? (response(@[@"hello",@"hellotv"])) : (error([NSError errorWithDomain:@"error" code:112 userInfo:@{}]));

    
  }
  
  RCT_EXPORT_METHOD(call2:(NSString *)phone
                    response:(RCTPromiseResolveBlock)response
                    error:(RCTPromiseRejectBlock)error)
  {
    NSLog(@"RN传入原生界面的数据为:%@",phone);
    NSUInteger num = phone.length;
    (num>2) ? (response(@[@"hello",@"hellotv"])) : (error(@"112",@"call2",[NSError errorWithDomain:@"error" code:112 userInfo:@{}]));

  }
  



@end
