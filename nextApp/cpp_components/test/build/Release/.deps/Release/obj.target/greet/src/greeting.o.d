cmd_Release/obj.target/greet/src/greeting.o := c++ -o Release/obj.target/greet/src/greeting.o ../src/greeting.cpp '-DNODE_GYP_MODULE_NAME=greet' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-DV8_DEPRECATION_WARNINGS' '-DV8_IMMINENT_DEPRECATION_WARNINGS' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DOPENSSL_NO_PINSHARED' '-DOPENSSL_THREADS' '-DNAPI_DISABLE_CPP_EXCEPTIONS' '-DBUILDING_NODE_EXTENSION' -I/Users/calebhalter/Library/Caches/node-gyp/12.18.3/include/node -I/Users/calebhalter/Library/Caches/node-gyp/12.18.3/src -I/Users/calebhalter/Library/Caches/node-gyp/12.18.3/deps/openssl/config -I/Users/calebhalter/Library/Caches/node-gyp/12.18.3/deps/openssl/openssl/include -I/Users/calebhalter/Library/Caches/node-gyp/12.18.3/deps/uv/include -I/Users/calebhalter/Library/Caches/node-gyp/12.18.3/deps/zlib -I/Users/calebhalter/Library/Caches/node-gyp/12.18.3/deps/v8/include -I/Users/calebhalter/Documents/Portfolio/cpp_components/test/node_modules/node-addon-api  -O3 -gdwarf-2 -mmacosx-version-min=10.10 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++1y -stdlib=libc++ -fno-rtti -fno-exceptions -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/greet/src/greeting.o.d.raw   -c
Release/obj.target/greet/src/greeting.o: ../src/greeting.cpp \
  ../src/greeting.h
../src/greeting.cpp:
../src/greeting.h:
