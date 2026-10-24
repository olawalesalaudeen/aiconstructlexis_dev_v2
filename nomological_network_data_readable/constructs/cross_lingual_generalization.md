# Cross-lingual generalization
**Type:** Construct  
**Referenced in:** 59 papers  
**Also known as:** Cross-lingual adaptability, Cross-lingual knowledge transfer, Cross-lingual transfer, Language generalization, Crosslingual transfer, Cross-lingual linguistic capabilities, Multilingual transfer, Cross-lingual transferability, Cross-lingual generalisation, Multilingual generalization, Generalization to unseen languages  

## State of the Field

**Definition agreement:** Consensus. Most papers define cross-lingual generalization as a model's ability to transfer or apply knowledge, skills, or capabilities learned in one language, often a high-resource language like English, to other languages, often low-resource or unseen ones, usually without explicit training or adaptation in those languages. A few papers emphasize the mechanism such as aligned multilingual representations, or describe the outcome as stable performance gains across languages, but they are still describing the same core transfer phenomenon rather than a different construct.

**Space of definitions.** Across papers, the prevailing usage treats cross-lingual generalization as a model ability to transfer knowledge, skills, or representations from one language to another, most often from English or other high-resource languages to low-resource or unseen languages. Many definitions cast it as a latent property of multilingual models, sometimes grounded in aligned multilingual semantic spaces or shared representations, while another common framing defines it through effective performance on other languages without explicit target-language training. A smaller line of work narrows the construct to particular transferred behaviors, such as hallucination mitigation, named entity recognition, reasoning, discourse processing, or document assessment across languages. The main disagreement is scope, broad transfer ability versus task-specific cross-lingual performance, and whether the construct is described as an internal representational property or directly through downstream outcomes.

**Space of facets.** Papers often use several near-synonymous labels for roughly the same idea, including multilingual generalization, cross-lingual transfer, cross-lingual knowledge transfer, cross-lingual transferability, cross-lingual adaptability, language generalization, multilingual transfer, and generalization to unseen languages. Across these labels, a recurring systematization ties the construct to shared or aligned multilingual representations: one study describes a "close resemblance between the hidden representation of instructions in two languages", others refer to aligned token representations or a shared multilingual space, and another contrasts cross-linguistic generalization with language-specific memorization. Subtypes are mostly set by transfer direction or level, such as English-to-target transfer, high-resource-to-low-resource transfer, discourse-level generalization, grammatical transfer, and transfer to unseen languages.

**Space of measurement.** Operationalization is mainly benchmark- and task-based, even though the definitions are usually broader. Papers link the construct to 2 measurement instruments and 7 behavioral indicators: the named instruments are the XNLI dataset and LASER, an LLM-based evaluation rubric, and direct measured_by links use task performance in machine translation, machine reading comprehension, and text classification, plus 4 other indicators. These operationalizations mostly match the dominant definitions by testing zero-shot or low-resource transfer across languages, but they often instantiate the construct through particular downstream tasks rather than a single general measure.

**Links.** One paper claims a causal relationship from semantic abstraction to cross-lingual generalization, and another from cross-lingual alignment to cross-lingual generalization. In the other direction, papers claim causal relationships from cross-lingual generalization to multilingual ability and to task outcomes such as machine translation and sign-language tasks. Separate papers report that it correlates with linguistic similarity, and that it is related to several other behaviors and constructs, including multilingual ability, translation ability, definition generation, instruction following, LASER, and semantic understanding.

## Sources

**[Breaking Physical and Linguistic Borders: Multilingual Federated Prompt Tuning for Low-Resource Languages](https://proceedings.iclr.cc/paper_files/paper/2024/file/3e9034dd5420660d86c8c360c35a895e-Paper-Conference.pdf)**
> The latent ability of a multilingual model to transfer knowledge from high-resource to low-resource languages, particularly when linguistic and data conditions differ significantly.

**[Efficiently Democratizing Medical LLMs for 50 Languages via a Mixture of Language Family Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/1551c01d7a3d0bf21e2518331e9f7074-Paper-Conference.pdf) (as "Multilingual generalization")**
> The model's ability to perform effectively on languages, particularly low-resource ones, without being explicitly or extensively trained on them.

**[From English to Second Language Mastery: Enhancing LLMs with Cross-Lingual Continued Instruction Tuning](https://aclanthology.org/2025.acl-long.1121.pdf) (as "Cross-lingual adaptability")**
> The latent ability of a model to transfer knowledge and skills from English to a target language, adjusting to language-specific patterns while retaining universal linguistic principles.

**[TokAlign: Efficient Vocabulary Adaptation via Token Alignment](https://aclanthology.org/2025.acl-long.207.pdf) (as "Cross-lingual knowledge transfer")**
> The ability of a model trained primarily on one language (e.g., English) to effectively perform tasks in other languages by leveraging aligned token representations.

**[Second Language (Arabic) Acquisition of LLMs via Progressive Vocabulary Expansion](https://aclanthology.org/2025.acl-long.100.pdf) (as "Cross-lingual transfer")**
> The capacity of a model to leverage knowledge acquired in one language (e.g., English) to enhance performance in another language (e.g., Arabic) during pre-training and inference.

**[Probing LLMs for Multilingual Discourse Generalization Through a Unified Label Set](https://aclanthology.org/2025.acl-long.915.pdf) (as "Language generalization")**
> The degree to which a model's discourse representations are aligned across different languages, enabling performance on multilingual tasks without language-specific adaptation.

**[On the Acquisition of Shared Grammatical Representations in Bilingual Language Models](https://aclanthology.org/2025.acl-long.1010.pdf) (as "Crosslingual transfer")**
> The ability of a multilingual model to apply knowledge learned from one language to improve performance or enable capabilities in another language.

**[QFrCoLA: a Quebec-French Corpus of Linguistic Acceptability Judgments](https://aclanthology.org/2025.emnlp-main.6.pdf) (as "Cross-lingual linguistic capabilities")**
> The ability of a multilingual model to transfer linguistic knowledge across languages, particularly in understanding and applying grammatical rules from one language to another.

**[YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbbb65dc108e8ac2f82cba25bc5992fc-Paper-Conference.pdf) (as "Multilingual transfer")**
> The phenomenon where training a model on multiple languages, including high-resource ones, improves its performance on low-resource languages.

**[Shared Path: Unraveling Memorization in Multilingual LLMs through Language Similarities](https://aclanthology.org/2025.emnlp-main.978.pdf) (as "Cross-lingual transferability")**
> The capability of a multilingual model to apply knowledge learned from one language to another, enabled by shared representations in a multilingual space.

**[Multilingual Reasoning via Self-training](https://aclanthology.org/2025.naacl-long.577.pdf) (as "Cross-lingual generalisation")**
> The ability of a model trained or tuned in one language to effectively apply reasoning skills to other languages, especially low-resource ones, without performance degradation.

**[LingGym: How Far Are LLMs from Thinking Like Field Linguists?](https://aclanthology.org/2025.emnlp-main.69.pdf) (as "Generalization to unseen languages")**
> The model's ability to apply learned linguistic principles to languages and structures not encountered during its training phase.

## Relationships

### Cross-lingual generalization →
- **Multilingual ability** (constructs) — *causes*
  > Researchers have attributed this phenomenon to cross-lingual transfer in LLM training, where linguistic patterns and knowledge acquired from high-resource languages (particularly English) appear to transfer effectively to enhance performance on the other languages (Section 1).
  - [Enhancing LLM Language Adaption through Cross-lingual In-Context Pre-training](https://aclanthology.org/2025.emnlp-main.1380.pdf)
- **Linguistic similarity** (constructs) — *correlates*
  > Our results show that both pretraining size and language similarity are tied to transfer, but the former has a stronger correlation.
  - [Multilinguality Does not Make Sense: Investigating Factors Behind Zero-Shot Cross-Lingual Transfer in Sense-Aware Tasks](https://aclanthology.org/2025.emnlp-main.1773.pdf)
- **XNLI** (measurements) — *measured_by*
  > Models are then fine-tuned on the XNLI dataset, for both cross-lingual zero-shot transfer from English and target language fine-tuning.
  - [Headless Language Models: Learning without Predicting with Contrastive Weight Tying](https://proceedings.iclr.cc/paper_files/paper/2024/file/92864e1191ed272deb0914b3bb50f97c-Paper-Conference.pdf)
- **Sign language translation** (behaviors tasks) — *causes*
  > experiments in sentence-level translation and sign language identiﬁcation which demonstrate multilingual transfer beneﬁts both higher- and lower-resource sign languages. (Section 5)
  - [YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbbb65dc108e8ac2f82cba25bc5992fc-Paper-Conference.pdf)
- **Sign language identification** (behaviors tasks) — *causes*
  > experiments in sentence-level translation and sign language identiﬁcation which demonstrate multilingual transfer beneﬁts both higher- and lower-resource sign languages. (Section 5)
  - [YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbbb65dc108e8ac2f82cba25bc5992fc-Paper-Conference.pdf)
- **C-Eval** (measurements) — *measured_by*
  > "SEC’s competitive performance on C-Eval shows its capability in the cross-linguistic scenario"
  - [Are Human-generated Demonstrations Necessary for In-context Learning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/19914b5bf19ab2b245d2e6ff7299e8f0-Paper-Conference.pdf)
- **TibetanQA** (measurements) — *measured_by*
  > ...followed by zero-shot testing on the TibetanQA dataset (Sun et al., 2021) to assess their cross-lingual transfer capabilities (Section 4.3).
  - [Enhancing Cross-Lingual Transfer through Reversible Transliteration: A Huffman-Based Approach for Low-Resource Languages](https://aclanthology.org/2025.acl-long.795.pdf)

### → Cross-lingual generalization
- **Semantic abstraction** (constructs) — *causes*
  > We hypothesize that cross-lingual generalization emerges through compression during pre-training. (Section 3)
  - [Cross-Lingual Generalization and Compression: From Language-Specific to Shared Neurons](https://aclanthology.org/2025.acl-long.661.pdf)
- **Cross-lingual alignment** (constructs) — *causes*
  > These metrics confirm that multi-way pretraining promotes a more coherent, language-agnostic embedding space, which drives the observed improvements in downstream performance and cross-lingual transfer. (Section 4.3)
  - [From Unaligned to Aligned: Scaling Multilingual LLMs with Multi-Way Parallel Corpora](https://aclanthology.org/2025.emnlp-main.374.pdf)
- **Knowledge retrieval** (behaviors tasks) — *causes*
  > the requirement for knowledge retrieval significantly hinders the model’s cross-lingual transferability when solving reasoning tasks. (Section 4.1)
  - [Large Language Models Are Cross-Lingual Knowledge-Free Reasoners](https://aclanthology.org/2025.naacl-long.72.pdf)
- **Language proficiency** (constructs) — *causes*
  > "This suggests that proficiency in Arabic and Hebrew limits the cross-linguistic transfer of the knowledge-free reasoning component, while improving proficiency in the target language can alleviate this limitation."
  - [Large Language Models Are Cross-Lingual Knowledge-Free Reasoners](https://aclanthology.org/2025.naacl-long.72.pdf)

### Associated with
- **Definition generation** (behaviors tasks)
  > In this section, we investigate whether models fine-tuned on individual languages (see Section 3) or multiple languages (see Section 4) can transfer their learned knowledge to other, unseen languages for the task of Definition Generation. (Section 5)
  - [Definition Generation for Word Meaning Modeling: Monolingual, Multilingual, and Cross-Lingual Perspectives](https://aclanthology.org/2025.emnlp-main.1321.pdf)
- **Instruction following** (behaviors tasks)
  > We question whether instruction-following capabilities could be directly transferred to new languages without dedicated instruction data, and whether instruction-tuned models could be adapted through continued pretraining, similar to base models. (Section 1)
  - [Instructing Large Language Models for Low-Resource Languages: A Systematic Study for Basque](https://aclanthology.org/2025.emnlp-main.1484.pdf)
- **In-context reasoning** (constructs)
  > "the knowledge-free reasoning capability can be nearly perfectly transferred across various source-target language directions"
  - [Large Language Models Are Cross-Lingual Knowledge-Free Reasoners](https://aclanthology.org/2025.naacl-long.72.pdf)
- **Text classification** (behaviors tasks)
  > We conducted continued pre-training of open-source LLMs using corpora obtained through various transliteration methods, analyzed cross-lingual transfer performance across text classification, named entity recognition, machine reading comprehension, knowledge extraction, and machine translation tasks (Section 1).
  - [Enhancing Cross-Lingual Transfer through Reversible Transliteration: A Huffman-Based Approach for Low-Resource Languages](https://aclanthology.org/2025.acl-long.795.pdf)
- **Machine translation** (behaviors tasks)
  > We conducted continued pre-training of open-source LLMs using corpora obtained through various transliteration methods, analyzed cross-lingual transfer performance across text classification, named entity recognition, machine reading comprehension, knowledge extraction, and machine translation tasks (Section 1).
  - [Enhancing Cross-Lingual Transfer through Reversible Transliteration: A Huffman-Based Approach for Low-Resource Languages](https://aclanthology.org/2025.acl-long.795.pdf)
