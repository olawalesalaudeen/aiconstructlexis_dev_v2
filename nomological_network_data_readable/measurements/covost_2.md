# CoVoST 2
**Type:** Measurement  
**Referenced in:** 8 papers  
**Also known as:** CoVoST2, CoVoST-2  

## State of the Field

**What it is.** Across definitions, papers treat CoVoST 2 as a multilingual speech-to-text translation corpus or benchmark, commonly described as derived from Common Voice and used for training and evaluation. Descriptions differ in which slices they foreground: one describes 15,500 English examples translated into seven typologically diverse languages, another uses its French-English and German-English subsets as a general-domain benchmark, and CoVoGER uses 14 non-English source languages paired bidirectionally with English for 28 source-target directions and N-best list generation.

**What it is claimed to measure.** Papers primarily use CoVoST 2 to measure Speech translation, and the links are more concentrated on that behavioral indicator than spread across many targets. Papers link it to 1 construct and 2 behavioral indicators, with Speech translation the prevailing target, Speech recognition a smaller usage, and Cross-lingual alignment the linked construct. One study also reads CoVoST 2 results as confirming "superior cross-lingual alignment and translation performance."

**Space of uses.** Papers use CoVoST 2 both as a direct evaluation benchmark and as source material for downstream benchmark construction. The only linked instrument is CoVoGER, which uses CoVoST-2 for speech translation when constructing that benchmark; other work uses it alongside MuST-C, MSLT, and Common Voice 20.0, and one study explicitly collects from both its training and test splits.

## Sources

**[Distilling an End-to-End Voice Assistant Without Instruction Training Data](https://aclanthology.org/2025.acl-long.388.pdf)**
> A benchmark dataset for evaluating speech-to-text translation, containing English speech examples to be translated into multiple typologically diverse languages.

**[Locate-and-Focus: Enhancing Terminology Translation in Speech Language Models](https://aclanthology.org/2025.acl-long.556.pdf) (as "CoVoST2")**
> A large-scale multilingual speech-to-text translation corpus (Common Voice Speech-to-Text) used for training and evaluating speech translation models.

**[CoVoGER: A Multilingual Multitask Benchmark for Speech-to-text Generative Error Correction with Large Language Models](https://aclanthology.org/2025.emnlp-main.320.pdf) (as "CoVoST-2")**
> A multilingual speech-to-text translation corpus derived from Common Voice, used in the CoVoGER benchmark to generate N-best lists for 28 source-target language directions.

## Relationships

### → CoVoST 2
- **Speech translation** (behaviors tasks) — *measured_by*
  > “En2Zh CoVoST2-En2Zh ...”
  - [SALMONN: Towards Generic Hearing Abilities for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/476ab8f369e489c04187ba84f68cfa68-Paper-Conference.pdf)
- **Speech recognition** (behaviors tasks) — *measured_by*
  > testing speech-to-text recognition (ASR) and translation (ST) on MuST-C v1.0 and CoVoST2 datasets. (Abstract)
  - [Prepending or Cross-Attention for Speech-to-Text? An Empirical Comparison](https://aclanthology.org/2025.naacl-long.153.pdf)
- **Cross-lingual alignment** (constructs) — *measured_by*
  > These results confirm Audio-Reasoner’s superior cross-lingual alignment and translation performance. (Section 4.2, referring to CoVoST 2 results in Table 5)
  - [Audio-Reasoner: Improving Reasoning Capability in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.1216.pdf)

### Associated with
- **CoVoGER** (measurements)
  > “To construct the COVOGER benchmark, we decode speech from two large-scale public datasets, Common Voice 20.0 for ASR and CoVoST-2 ... for ST.”
  - [CoVoGER: A Multilingual Multitask Benchmark for Speech-to-text Generative Error Correction with Large Language Models](https://aclanthology.org/2025.emnlp-main.320.pdf)
