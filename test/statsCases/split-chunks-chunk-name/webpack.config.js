const stats = {
	hash: false,
	timings: false,
	builtAt: false,
	assets: false,
	chunks: true,
	chunkRelations: true,
	chunkModules: true,
	chunkOrigins: true,
	entrypoints: true,
	modules: false
};
module.exports = {
	mode: "production",
	entry: {
		main: "./"
	},
	output: {
		filename: "default/[name].js"
	},
	optimization: {
		splitChunks: {
			minSize: 100
		}
	},
	stats
};
