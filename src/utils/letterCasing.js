function letterCasing(params) {
	/**
   * 1. make string lowercase,
   * 2. split params at spaces,
   * 3. uppercase first letter
   */
	if (params !== '' && typeof params === 'string') {
		params.toLowerCase();
	}
	console.log(params);
}

export default letterCasing;
