# Changelog

---

## [0.6.0](https://github.com/welance/welance-bs/compare/v0.5.9...0.6.0) \(2017-06-12\)

### Features

* none

### Bug Fixes

* added modular-scale sass mixins in the right SASS file.


### DEPRECATIONS

* none

### BREAKING CHANGES

* none

---



---

## [0.5.8](https://github.com/welance/welance-bs/compare/v0.5.8...0.5.9) \(2017-06-02\)

### Features

* none

### Bug Fixes

* Fixed ability to override `$ms-base`, `$ms-ratio`, `$ms-range` and `$ms-fluid` in SASS from projects using welance-bs.


### DEPRECATIONS

* none

### BREAKING CHANGES

* none

---

---

## [0.5.8](https://github.com/welance/welance-bs/compare/v0.5.5...0.5.8) \(2017-06-02\)

### Features

* cleaned up inclusion of SASS files

### Bug Fixes

* none

### DEPRECATIONS

* none

### BREAKING CHANGES

* none

---

---

## [0.5.5](https://github.com/welance/welance-bs/compare/v0.5.4...0.5.5) \(2017-06-02\)

### Features

* re-defined images aspect ratio classes

```
RATIO FOR <picture> and background-image.

Usage for picture:

<div class="r16-9">
  <picture class="ratio-content">
    <source srcset="https://fillmurray.com/1400/1400" media="(min-width: 600px)">
    <img src="https://fillmurray.com/1400/1400" alt="alt text"/>
  </picture>
</div>


Usage for background:

<div class="img img--ratio-1-1" style="background-image: url("https://fillmurray.com/1400/1400");"></div>
```

### Bug Fixes

* none

### DEPRECATIONS

* none

### BREAKING CHANGES

* none

---

---

## [0.5.4](https://github.com/welance/welance-bs/compare/v0.5.3...0.5.4) \(2017-06-02\)

### Features

* none

### Bug Fixes

* added $golden var into variables to permit overriding of it

### DEPRECATIONS

* none

### BREAKING CHANGES

* none

---

---

## [0.5.3](https://github.com/welance/welance-bs/compare/v0.5.2...0.5.3) \(2017-05-31\)

### Features

* defined images aspect ratios

### Bug Fixes

* none

### DEPRECATIONS

* none

### BREAKING CHANGES

* none

---

---

## [0.5.2](https://github.com/welance/welance-bs/compare/v0.5.0...0.5.2) \(2017-05-28\)

### Features

* added col--offset-0-*@anyBreakpoint to offer possibility of having no offset, or better: overriding offsets when another offset is set at a smaller breakpoint

### Bug Fixes

* none

### DEPRECATIONS

* none

### BREAKING CHANGES

* none

---

---

## [0.5.0](https://github.com/welance/welance-bs/compare/v0.2.0...0.5.0) \(2017-05-15\)

### Features

* none. Mainly refactoring/re-organisation/renaming of existing components

### Bug Fixes

* Since 0.2.0 (previous version) was very much an experimental version, various bugfixes have been done

### DEPRECATIONS

* `<list>` is now `<tree>` (and `:list` is `:tree`)
* component `<logo-list>` removed
* component `<list-of-lists>` removed in favor of `<tree>`

### BREAKING CHANGES

* Since 0.2.0 (previous version) was very much an experimental version, many things will be breaking

---
