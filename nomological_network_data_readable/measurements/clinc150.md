# CLINC150
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** CLINC, Clinic-150  

## State of the Field

**What it is.** Across papers, the dominant description of CLINC150 is an English intent classification or intent detection benchmark organized around 150 intents or classes. Papers agree on the 150-class framing but describe the domain structure differently: one definition says 10 domains, another says multiple domains such as banking and travel, and one paper describes 150 classes across five domains. A smaller line also treats it as an intent clustering benchmark, and one dataset-construction paper uses sample sentences from CLINC while extracting 40 intents from five domains for culturally adapted utterance generation.

**What it is claimed to measure.** Papers link CLINC150 to one behavioral indicator, Intent classification, and one construct, Reasoning. The prevailing usage is to measure Intent classification or intent detection: one relationship says it is designed for intent classification, and another paper reports using CLINC for intent detection. A smaller usage reports it as measuring Reasoning, describing evaluations of reasoning accuracy across benchmark datasets that include CLINC150.

**Space of uses.** Papers often position CLINC150 as one benchmark among several. It appears as a comparison dataset for intent clustering and is used alongside BANK77, BANKING, StackOverflow, HWU64, and LIU54 in benchmark suites for intent detection, classification, or reasoning evaluation. One paper also repurposes it as source material, taking sample sentences and a 40-intent subset from five domains for culturally adapted utterance generation.

## Sources

**[HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf)**
> A dataset for intent classification across 150 different intent categories.

**[INJONGO: A Multicultural Intent Detection and Slot-filling Dataset for 16 African Languages](https://aclanthology.org/2025.acl-long.464.pdf) (as "CLINC")**
> An English-only intent detection dataset with 150 intent classes across 10 domains, used as a source for culturally adapted utterance generation in INJONGO.

**[In-Context Learning with Long-Context Models: An In-Depth Exploration](https://aclanthology.org/2025.naacl-long.605.pdf) (as "Clinic-150")**
> A benchmark dataset for intent classification covering 150 common intents across multiple domains like banking and travel.

## Relationships

### → CLINC150
- **Intent classification** (behaviors tasks) — *measured_by*
  > Intent Classification. CLINC150 (mis, 2020) is designed for intent classification, which comprises 150 classes across five domains... (Section 4.1).
  - [On Large Language Model Continual Unlearning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fc28053a08f59fccb48b11f2e31e81c7-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > This section presents a comprehensive evaluation of the reasoning accuracy of both closed-source and open-source LLMs using a range of prompt engineering and demonstration selection techniques across four benchmark datasets: BANKING77, CLINC150, HWU64, and LIU54. (Section 4.4)
  - [Demonstration Selection for In-Context Learning via Reinforcement Learning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25dp/wang25dp.pdf)
