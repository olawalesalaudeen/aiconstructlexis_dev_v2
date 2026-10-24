# Cultural adaptation
**Type:** Construct  
**Referenced in:** 8 papers  
**Also known as:** Cultural appropriateness, Norm following, Cultural adaptability  

## State of the Field

**Definition agreement:** Consensus. All papers define cultural adaptation as a model's or its outputs' ability to align with and appropriately adjust to the norms, values, discourse styles, or sensitivities of a specific cultural context. A few papers emphasize particular settings such as non-Western cultures, dialogue, target language use, or user-specific context, but these are scope and emphasis differences rather than different phenomena.

**Space of definitions.** Most commonly, papers describe cultural adaptation as alignment or adjustment to culture-specific norms, values, rules, and discourse patterns in a given context. Some define it at the model level, as the ability to adjust responses based on a user's cultural context or to adhere to the norms of particular communities, while others define it at the output level, as generated content or dialogue that respects social norms, traditions, sensitivities, and culturally relevant conversational styles. A smaller line of work adds a narrower emphasis on accurately representing diverse norms, especially in non-Western and low-income regions, and on avoiding ethnocentric evaluation.

**Space of facets.** Papers use several closely related labels for this construct, most often cultural adaptability, cultural appropriateness, and norm following. One line of work breaks it down by levels of norm specificity, "from abstract values to explicit social norms," while another treats it as part of localization beyond literal translation, covering culturally relevant norms, entities, and conversational styles. The main axis of variation is whether papers treat it as a model capacity to adapt to users and communities or as a property of generated text or dialogue that fits a target cultural context.

**Space of measurement.** Operationalization centers on 2 measurement instruments, NormAd and Human evaluation, with no linked behavioral indicators and no linked constructs. NormAd is presented as an evaluation framework that focuses on cultural adaptability and measures a model's ability to judge social acceptability across varying levels of cultural norm specificity, including judgments of cultural norms across 75 countries. Human evaluation appears as direct assessment of generated greetings on five dimensions, where cultural appropriateness is rated alongside language quality, creativity, emotional resonance, and content richness.

## Sources

**[Igniting Creative Writing in Small Language Models: LLM-as-a-Judge versus Multi-Agent Refined Rewards](https://aclanthology.org/2025.emnlp-main.868.pdf) (as "Cultural appropriateness")**
> The extent to which generated content aligns with cultural norms, traditions, and sensitivities, ensuring relevance and respect within a specific sociocultural context.

**[STEER-BENCH: A Benchmark for Evaluating the Steerability of Large Language Models](https://aclanthology.org/2025.emnlp-main.925.pdf) (as "Norm following")**
> The degree to which a model adheres to the values, rules, and discourse patterns of particular social or cultural communities.

**[The discordance between embedded ethics and cultural inference in large language models](https://aclanthology.org/2025.emnlp-main.743.pdf) (as "Cultural adaptability")**
> The model's capacity to accurately represent and adapt to diverse cultural norms, especially those from non-Western and low-income regions, without imposing ethnocentric evaluations.

## Relationships

### Cultural adaptation →
- **NormAd** (measurements) — *measured_by*
  > NORMAD (Norms and Adaptability of Language Models) (Rao et al., 2024) focuses on the cultural adaptability of LLMs. (Section 2)
  - [ITALIC: An Italian Culture-Aware Natural Language Benchmark](https://aclanthology.org/2025.naacl-long.68.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Following the evaluation criteria detailed in Section 4.3, we engaged a team of professionally trained evaluators to assess the generated greetings across five dimensions: language quality, creativity, emotional resonance, cultural appropriateness, and content richness.
  - [Igniting Creative Writing in Small Language Models: LLM-as-a-Judge versus Multi-Agent Refined Rewards](https://aclanthology.org/2025.emnlp-main.868.pdf)
