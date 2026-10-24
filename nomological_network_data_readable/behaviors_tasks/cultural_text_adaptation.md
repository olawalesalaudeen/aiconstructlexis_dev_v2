# Cultural text adaptation
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Cultural context adaptation, Cultural adaptation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this behavior as adapting text or generated dialogue to a target cultural context so it is appropriate for that culture's norms, entities, and expectations. Some definitions make the transformation explicit: a source-culture text is turned into an adapted text by replacing culturally grounded entities while preserving semantic intent, and dialogue work checks whether slot substitutions are similar to those made by human annotators. A smaller framing narrows the task to recontextualizing educational materials for different regions.

**Variants.** Papers use several nearby names for the behavior, including cultural context adaptation, cultural text adaptation, and cultural adaptation. The studied settings range from educational material recontextualization, to source-to-target cultural rewriting such as American to Indian text, to adaptation in Arabic and English through Arab versus Western entity choices in [MASK] contexts, and dialogue localization through slot substitutions for names, locations, brands, and references.

**Space of elicitation and scores.** Papers link the behavior to 3 instruments overall: DIWALI, Human evaluation, and LLM-as-a-judge. Direct measurement is described through Human evaluation and LLM-as-a-judge, while 1 linked behavioral indicator, Text infilling, measures it by analyzing preference for Arab versus Western entities as [MASK] token fillings. DIWALI is linked differently, through a causal claim that its CSIs can enable better and more holistic adaptation.

**What it is taken as evidence of.** Only 1 construct is linked to this behavior, Social bias. Papers report that link as related rather than as direct measurement evidence, with a paper stating that cultural misalignment can increase bias, and no other construct is linked.

## Sources

**[Position: LLMs Can be Good Tutors in English Education](https://aclanthology.org/2025.emnlp-main.885.pdf) (as "Cultural context adaptation")**
> The observable task of recontextualizing educational materials to reflect the cultural and social norms of different regions.

**[DIWALI - Diversity and Inclusivity aWare cuLture specific Items for India: Dataset and Assessment of LLMs for Cultural Text Adaptation in Indian Context](https://aclanthology.org/2025.emnlp-main.1706.pdf)**
> The observable process of modifying a text from a source cultural context (e.g., American) to align with a target cultural context (e.g., Indian) by replacing culturally grounded entities while preserving semantic intent.

**[On The Origin of Cultural Biases in Language Models: From Pre-training Data to Linguistic Phenomena](https://aclanthology.org/2025.naacl-long.326.pdf) (as "Cultural adaptation")**
> The ability of a language model to appropriately handle and generate text that aligns with specific cultural contexts, norms, and entities.

## Relationships

### Cultural text adaptation →
- **LLM-as-a-judge** (measurements) — *measured_by*
  > To measure the cultural competence of LLMs on a cultural text adaptation task, we evaluate the adaptations using the CSIs created, LLM as Judge, and human evaluations from diverse socio-demographic region. (Abstract)
  - [DIWALI - Diversity and Inclusivity aWare cuLture specific Items for India: Dataset and Assessment of LLMs for Cultural Text Adaptation in Indian Context](https://aclanthology.org/2025.emnlp-main.1706.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > To measure the cultural competence of LLMs on a cultural text adaptation task, we evaluate the adaptations using the CSIs created, LLM as Judge, and human evaluations from diverse socio-demographic region. (Abstract)
  - [DIWALI - Diversity and Inclusivity aWare cuLture specific Items for India: Dataset and Assessment of LLMs for Cultural Text Adaptation in Indian Context](https://aclanthology.org/2025.emnlp-main.1706.pdf)

### Associated with
- **Text infilling** (behaviors tasks)
  > We compare the ability of LMs at adapting to cultural contexts in Arabic and English by analyzing their preference for Arab vs. Western entities as [MASK] token fillings of CAMeL-2 contexts. (Section 3.2)
  - [On The Origin of Cultural Biases in Language Models: From Pre-training Data to Linguistic Phenomena](https://aclanthology.org/2025.naacl-long.326.pdf)
