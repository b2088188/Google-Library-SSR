function sliceData(results, page, resPerPage = 10) {
	const start = (page - 1) * resPerPage;
	const end = page * resPerPage;
	return results.slice(start, end);
}

export default sliceData;
