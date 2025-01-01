function FindProxyForURL(url, host) {
    // Debugging: Return a string to see which host is being processed
    // Uncomment the line below for debugging purposes
    // return "PROXY 10.240.10.91:8080; // Processing: " + host;

    // Bypass proxy for specified domains
    if (dnsDomainIs(host, "centrepointstores.com") ||
        dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "facebook.com") ||
        dnsDomainIs(host, "whatsapp.com") ||
        dnsDomainIs(host, "gmail.com") ||
        dnsDomainIs(host, "google.com") ||
        dnsDomainIs(host, "perplexity.ai") ||
        dnsDomainIs(host, "twitter.com") ||
        dnsDomainIs(host, "instagram.com") ||
        dnsDomainIs(host, "linkedin.com")) {
        return "DIRECT";
    }

    // Use proxy for all other traffic
    return "PROXY 10.240.10.91:8080";
}
