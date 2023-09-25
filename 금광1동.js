function searchDatabase(bunji) {
    if (
        (bunji >= 1347 && bunji <= 1364.1) ||
        (bunji >= 1782 && bunji <= 1791)
    ) {
        return "제2통 제4반";
    } else if (
        (bunji >= 1365 && bunji <= 1371) ||
        (bunji >= 1792 && bunji <= 1800) ||
        (bunji >= 1806 && bunji <= 1806.10)
    ) {
        return "제2통 제5반";
    } else if (
        (bunji >= 1372 && bunji <= 1376)
    ) {
        return "제2통 제3반";
    } else if (
        (bunji >= 1377 && bunji <= 1379) ||
        (bunji >= 1820 && bunji <= 1822)
    ) {
        return "제2통 제4반";
    } else if (
        (bunji >= 1806.11 && bunji <= 1806.14) ||
        (bunji >= 1811 && bunji <= 1814)
    ) {
        return "제2통 제6반";
    }
}
