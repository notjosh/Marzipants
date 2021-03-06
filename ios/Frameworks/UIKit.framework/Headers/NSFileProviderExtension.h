#if USE_UIKIT_PUBLIC_HEADERS || !__has_include(<UIKitCore/NSFileProviderExtension.h>)
//
//  NSFileProviderExtension.h
//  UIKit
//
//  Copyright (c) 2014-2017 Apple Inc. All rights reserved.
//

#import <Foundation/Foundation.h>

#if __has_include(<FileProvider/NSFileProviderExtension.h>)

// NSFileProviderExtension has moved to its own framework.
// Please modify your project to link against and include FileProvider.framework instead of UIKit.
#import <FileProvider/NSFileProviderExtension.h>

#endif

#else
#import <UIKitCore/NSFileProviderExtension.h>
#endif
