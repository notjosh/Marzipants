//
//  AppDelegate.swift
//  MarzipantsMacSwift
//
//  Created by Joshua May on 7/6/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import UIKit

//import React

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

  var window: UIWindow?

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {

//    let bundleRoot = "index"
//    let moduleName = "Marzipants"
    let bundleRoot = "RNTester/RNTesterApp.ios"
    let moduleName = "RNTesterApp"


    let jsCodeLocation = RCTBundleURLProvider.sharedSettings()?.jsBundleURL(forBundleRoot: bundleRoot, fallbackResource: nil)


    let rootView = RCTRootView(bundleURL: jsCodeLocation,
                               moduleName: moduleName,
                               initialProperties: nil,
                               launchOptions: launchOptions)!
    rootView.backgroundColor = UIColor.white

    let rvc = UIViewController()
    rvc.view = rootView

    window = UIWindow(frame: UIScreen.main.bounds)
    window?.rootViewController = rvc
    window?.makeKeyAndVisible()
    return true

/*
 NSURL *jsCodeLocation;

 jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

 RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
 moduleName:@"Marzipants"
 initialProperties:nil
 launchOptions:launchOptions];
 rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

 self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
 UIViewController *rootViewController = [UIViewController new];
 rootViewController.view = rootView;
 self.window.rootViewController = rootViewController;
 [self.window makeKeyAndVisible];
 return YES;
 */

//    return true
  }

}
