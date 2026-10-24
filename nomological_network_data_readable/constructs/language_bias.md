# Language bias
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Anglocentric bias, Language-dependent effectiveness, Cross-lingual fairness, English-centric bias, Linguistic bias  

## State of the Field

**Definition agreement:** Consensus. Most papers define language bias as unequal model behavior across natural languages, especially performance gaps that favor English or other high-resource or Western languages, sometimes broadened to fairness or efficiency across languages. A few papers use the term for different phenomena, such as language-driven clustering in embeddings or text-over-vision reliance, but the dominant usage across the papers is the same cross-language performance disparity.

**Space of definitions.** Across the papers, the prevailing usage treats language bias as language-dependent unevenness in model behavior: performance varies by language, models may prefer some languages or language pairs over others, and English, Western, or higher-resource languages are often favored. This framing appears both in task-performance definitions, where similar content can yield different results across languages, and in representation-space definitions, where sentences from the same language can be mapped closer together regardless of semantic similarity. A minority usage applies the same label to large vision-language models, defining it instead as over-reliance on textual inputs and neglect of visual inputs during generation. One paper also broadens the cross-lingual framing from performance alone to equitable computational efficiency across languages.

**Space of facets.** Papers use several near-synonymous labels for the cross-lingual version of the construct, including cross-lingual fairness, anglocentric bias, English-centric bias, language-dependent effectiveness, and linguistic bias. Within that cluster, some authors narrow the issue to English versus other languages or Western versus non-Western languages, some stress style-sensitive translation, and another paper characterizes it as preference in multilingual embedding spaces. The clearest terminological split is that the same name, language bias, is also used for LVLM over-reliance on text and neglect of visual inputs, rather than for disparities across natural languages.

**Space of measurement.** Across the papers, language bias is linked to 1 measurement instrument and 1 behavioral indicator. The linked instrument is ScienceQA-IMG, described as a dataset where zero-shot performance is used to assess whether a method alleviates language bias, and the linked behavioral indicator is hallucination. Beyond that explicit instrument link, cross-lingual papers operationalize the construct as performance drop when switching from bilingual to multilingual evaluation, as systematic language-dependent differences captured with linear mixed-effects models, or more generally as differences in performance and computational efficiency across languages. These operationalizations follow the same split as the definitions: cross-lingual papers measure between-language disparities, while the LVLM usage appears in a multimodal setting alongside hallucination and visual comprehension.

**Links.** In the reported relationships, language bias is linked to 1 behavioral indicator, hallucination, and 2 constructs, multilingual ability and visual understanding. Several papers claim a causal relationship from language bias to hallucination, describing models that prioritize language patterns, ignore images, or rely heavily on text, which is said to lead to fluent but inaccurate content. One paper also claims a causal relationship from language bias to visual understanding, citing evidence that debiasing language bias enhances visual comprehension. Separately, one paper reports that language bias is related to multilingual ability, stating that multilingual capabilities coexist with English-centric behavior.

## Sources

**[Retrofitting Large Language Models with Dynamic Tokenization](https://aclanthology.org/2025.acl-long.1444.pdf) (as "Cross-lingual fairness")**
> The degree to which model performance and computational efficiency are equitable across different languages, mitigating biases introduced by static tokenization.

**[Towards Style Alignment in Cross-Cultural Translation](https://aclanthology.org/2025.acl-long.1550.pdf) (as "Anglocentric bias")**
> A systemic tendency for model performance, particularly in style-sensitive tasks like translation, to be higher for English and Western languages compared to non-Western languages.

**[Robust Estimation of Population-Level Effects in Repeated-Measures NLP Experimental Designs](https://aclanthology.org/2025.acl-long.1586.pdf) (as "Language-dependent effectiveness")**
> The systematic variation in a model's performance that is attributable to the specific natural language it is operating on, often observed as a performance gap between high-resource and lower-resource languages.

**[Modular Sentence Encoders: Separating Language Specialization from Cross-Lingual Alignment](https://aclanthology.org/2025.acl-long.108.pdf)**
> The tendency of a multilingual model to prefer certain languages or language pairs, for instance by mapping sentences from the same language closer together in the embedding space regardless of semantic similarity.

**[Is Translation All You Need? A Study on Solving Multilingual Tasks with Large Language Models](https://aclanthology.org/2025.naacl-long.485.pdf) (as "English-centric bias")**
> A model's disposition to perform better on English tasks and contexts due to being trained on disproportionately English-dominated datasets.

**[Think Globally, Group Locally: Evaluating LLMs Using Multi-Lingual Word Grouping Games](https://aclanthology.org/2025.emnlp-main.1019.pdf) (as "Linguistic bias")**
> The tendency for a model to exhibit differential performance on a task depending on the linguistic modality of the input, even when the content is similar.

## Relationships

### Language bias →
- **Hallucination** (behaviors tasks) — *causes*
  > language bias in VLMs, a common issue for VLMs that often leads to hallucination when faced with extensive textual context. (ABSTRACT)
  - [MMICL: Empowering Vision-language Model with Multi-Modal In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/41128e5b3a7622da5b17588757599077-Paper-Conference.pdf)
- **ScienceQA-IMG** (measurements) — *measured_by*
  > Zero-shot performance of different VLMs on ScienceQA-IMG dataset in different split. MMICL outperforms other VLMs by successfully alleviating language bias. (Table 5)
  - [MMICL: Empowering Vision-language Model with Multi-Modal In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/41128e5b3a7622da5b17588757599077-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *causes*
  > "LACING effectively debiases LVLMs from their language bias, enhancing visual comprehension and reducing hallucinations"
  - [Looking Beyond Text: Reducing Language Bias in Large Vision-Language Models via Multimodal Dual-Attention and Soft-Image Guidance](https://aclanthology.org/2025.emnlp-main.995.pdf)

### Associated with
- **Multilingual ability** (constructs)
  > Large language models (LLMs) have demonstrated multilingual capabilities, yet they are mostly English-centric due to the imbalanced training corpora. (Abstract)
  - [Is Translation All You Need? A Study on Solving Multilingual Tasks with Large Language Models](https://aclanthology.org/2025.naacl-long.485.pdf)
