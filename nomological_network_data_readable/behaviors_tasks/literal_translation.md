# Literal translation
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Literal translation of idioms  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage is an output pattern where a model translates an idiom or proverb word for word, or in another compositionally accurate way, but fails to convey its figurative meaning. Definitions largely agree that what makes the behavior recognizable is preservation of the source wording or structure instead of a natural or idiomatic target-language expression, and one study describes systems as "often rendering them literally as compositional expressions." A smaller extension uses the same label for phrase-by-phrase translation in domain-specific text when the result is less fluent or overly descriptive.

**Variants.** Papers study this behavior most often in idiom translation, including Persian-English idioms and finance-domain idiomatic expressions, where a phrase that would be more natural in English as "a leap of faith" is rendered as "a leap into the void" or "a leap into the unknown." Another line treats it as literal rendering of Arabic proverbs, preserving the original structure, and another applies it to tax and financial education terminology, where models use descriptive phrases such as "income that is subject to tax" instead of "taxable income." The naming is mostly "Literal translation," with one paper using "Literal translation of idioms."

**Space of elicitation and scores.** No measurement instrument is linked to this behavior. One study nonetheless comments on scoring by noting that "BLEU penalizes non-literal translations."

**What it is taken as evidence of.** Papers do not present this behavior as evidence of any construct. The only other recorded link is associative: one paper reports that it correlates with speech translation, describing speech-to-text systems on idiomatic data as often reverting to literal translations.

## Sources

**[JAWAHER: A Multidialectal Dataset of Arabic Proverbs for LLM Benchmarking](https://aclanthology.org/2025.naacl-long.613.pdf)**
> Producing a word-for-word or compositionally accurate translation of an idiom that fails to convey its figurative meaning.

**[The Impact of Domain-Specific Terminology on Machine Translation for Finance in European Languages](https://aclanthology.org/2025.naacl-long.140.pdf) (as "Literal translation of idioms")**
> An observable error pattern where a model translates an idiomatic expression word-for-word from the source language, failing to capture its figurative meaning.

## Relationships

### Associated with
- **Speech translation** (behaviors tasks)
  > SLT systems experience a pronounced performance drop on idiomatic data, often reverting to literal translations even in higher layers. (Section 1)
  - [It's Not a Walk in the Park! Challenges of Idiom Translation in Speech-to-text Systems](https://aclanthology.org/2025.acl-long.1512.pdf)
