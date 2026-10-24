# Stealth
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

Across the provided literature, Stealth is consistently characterized as the property of an attack that allows it to evade detection. However, the specific mechanisms and operationalizations for achieving this property differ across papers. One line of work defines stealthiness through the linguistic quality of adversarial inputs, where fluency and coherence lead to low perplexity scores that bypass automated defenses; one study notes such attacks are "difficult to detect automatically and are more coherent to humans" ("Iterative Self-Tuning LLMs for Enhanced Jailbreaking Capabilities"). Another framing operationalizes stealth through behavioral patterns, such as avoiding repeated attack texts to make an input appear "less suspicious to the gatekeeper" ("Typographic Attacks in a Multi-Image Setting"). A third perspective describes stealth as the ability of a compromised model or poisoned data to remain undetected by "appearing to function normally on benign tasks" ("ImgTrojan: Jailbreaking Vision-Language Models with ONE Image"). The relationship between Stealth and Text quality is also presented with some variation; while one source suggests Stealth causes changes in text quality, another implies that high text quality (fluency and coherence) is a means to achieve stealth.

## Sources

**[ImgTrojan: Jailbreaking Vision-Language Models with ONE Image](https://aclanthology.org/2025.naacl-long.360.pdf) (as "Stealthiness")**
> The extent to which adversarial suffixes avoid detection by automated defenses, such as perplexity filters, due to their fluency and coherence.

**[Typographic Attacks in a Multi-Image Setting](https://aclanthology.org/2025.naacl-long.626.pdf)**
> The property of an attack that reduces its detectability by a gatekeeper, particularly through the avoidance of repeated attack text patterns across images.
