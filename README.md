# LazyLoadBug

This project demonstrates why it is impossible to build angular cli libraries that are "common" and have lazy loading work properly.

To help understand this, do the following -

* Start the app and open dev tools.
* click entry1-route
* see that two chunks are lazy loaded
  * one is entry1.module.ts
  * the second is a common chunk that contains everything from the 'test-lib/common' library and common2/truck.ts
* click entry2-route
* see that entry2.module.ts is lazy loaded, and it shares the common chunk with entry1.module.ts
* click entry3-route
* see that entry3.module.ts is lazy loaded, with common2/bike.ts in the same chunk
* click entry4-route
* see that entry4.module.ts is lazy loaded, with common2/van.ts in the same chunk


What this demonstrates is that lazy loading can be very smart, but it's not smart when you put stuff in a library.

It was smart enough to put common2/truck.ts in the common chuck, since it is used by both entry3.module.ts and entry4.module.ts.

And smart enough to put common2/bike.ts with entry3.module.ts because it is only used there, and common2/van.ts with entry4.module.ts because it is only used there

But it was not smart enough to do the same for stuff in test-lib/common.

This is because to get to things in test-lib/common, we must go through a barrel file, the public api for test-lib/common.

So - 
* Given ng-packagrs stance that there is only a single public api per entry point
* **It impossible to have common libraries that lazy load properly**

You could start adding secondary entry points for everything that you want to be bundled separately, but this quickly escalates to having a secondary entry point for basically every file.

And you are basically taking the responsibility of chunk creation away from the lazy loading mechanism and giving it to the dev, who will not be as smart.

**The core problem seems to be that the lazy loading mechanism cannot pick and choose stuff out of barrel files**

Everything in that barrel will always be a part of the same chunk. It will never get split up.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

