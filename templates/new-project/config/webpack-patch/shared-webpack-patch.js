'use strict'

import path from "path";

function modifyWebpackConfig(webpackConfig) {
    // eslint-disable-next-line no-undef
    webpackConfig.resolve = webpackConfig.resolve || {};
    const repoRoot = process.cwd();

    webpackConfig.resolve.alias = {
        ...(webpackConfig.resolve.alias || {}),
        "@hooks": path.resolve(repoRoot, "lib/shared/hooks"),
        "@functions": path.resolve(repoRoot, "lib/shared/functions"),
        "@components": path.resolve(repoRoot, "lib/shared/components"),
        "@types": path.resolve(repoRoot, "lib/shared/types"),
    };
}

export default modifyWebpackConfig