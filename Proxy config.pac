function FindProxyForURL(url, host) {
    // Bypass proxy for specified domains
    if (dnsDomainIs(host, "centrepointstores.com") ||
        dnsDomainIs(host, "youtube.com") ||
        dnsDomainIs(host, "facebook.com") ||
        dnsDomainIs(host, "whatsapp.com") ||
        dnsDomainIs(host, "gmail.com") ||
        dnsDomainIs(host, "google.com") ||
        dnsDomainIs(host, "perplexity.ai")) {
        return "DIRECT";
    }

    // Use proxy for all other traffic
    return "10.240.10.91:8080";
}
