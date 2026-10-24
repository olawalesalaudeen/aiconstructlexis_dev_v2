# Perspective API
**Type:** Measurement  
**Referenced in:** 40 papers  
**Also known as:** PERSPECTIVE API, PerspectiveAPI, Perspective toxicity model  

## State of the Field

**What it is.** Across papers, the prevailing description is an external API or automated tool for toxicity assessment of text, used to score generated outputs for harmful content. Definitions largely converge on an overall toxicity score plus attribute-level scores, commonly including toxicity, severe toxicity, threat, profanity, insult, and identity attack; some papers say it covers six attributes, one selects five safety aspects, and another uses eight attributes including sexually explicit and flirtation. A smaller line of work describes it as a toxicity classifier, a content-safety evaluation tool, or a Perspective toxicity model, and papers note scores in the 0 to 1 range, with one paper also using it to identify toxic spans.

**What it is claimed to measure.** Papers link it to 3 constructs and 1 behavioral indicator. The dominant use is to measure Toxicity: papers describe assigning a toxicity score or probability to each reply, sentence, or prediction, and one paper calls it a widely recognized automated toxicity detection tool and the de facto benchmark. A smaller line of work reports it as measuring Harmful content generation, Harmlessness, and Safety, so the claims spread beyond one target but remain centered on toxicity.

**Space of uses.** Across the surveyed work, it is usually positioned as an automatic evaluation layer or baseline harm classifier: authors use it to score generated replies, completed sentences, comments, stories, and vision-language model outputs, sometimes with thresholds such as greater than 0.5, 0.32, or at least 0.7. It is used alongside 2 other instruments, Human evaluation and RealToxicityPrompts, and papers also pair it with OpenAI Moderation API, Detoxify, and Llama Guard, as well as other toxic classifiers. Some papers extend its role to dataset filtering, data augmentation, and re-ranking comparisons.

**Concerns raised.** Only a few papers surface limitations directly. In one study of harmful instructions, using a threshold of at least 0.7, Perspective API flagged 4%, while OpenAI's API flagged 17% and Detoxify 6%.

## Sources

**[Controlled Text Generation via Language Model Arithmetic](https://proceedings.iclr.cc/paper_files/paper/2024/file/96aad3299d18497e2bea4fc20b949b81-Paper-Conference.pdf)**
> An external tool used to classify text along multiple dimensions of toxicity, including severe toxicity, threat, profanity, and identity attack.

**[CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf) (as "PERSPECTIVE API")**
> External tool that provides fine-grained toxicity scoring for text, including attributes like insult, profanity, and identity attack.

**[``Yes, My LoRD.'' Guiding Language Model Extraction with Locality Reinforced Distillation](https://aclanthology.org/2025.acl-long.73.pdf) (as "PerspectiveAPI")**
> Automated content safety evaluation tool that scores text outputs on dimensions such as toxicity, insult, profanity, severe toxicity, and threat to assess model safety alignment.

**[Biased Tales: Cultural and Topic Bias in Generating Children's Stories](https://aclanthology.org/2025.emnlp-main.3.pdf) (as "Perspective toxicity model")**
> State-of-the-art benchmark for detecting toxic content in text, assigning a toxicity score from 0 (non-toxic) to 1 (highly toxic), used to assess safety of generated stories.

## Relationships

### → Perspective API
- **Toxicity** (constructs) — *measured_by*
  > Our evaluation mechanism employs the Perspective API2, which classifies text based on six delineated toxicity attributes. (Section 5.1)
  - [Unveiling and Manipulating Prompt Influence in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/77c6ccacfd9962e2307fc64680fc5ace-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > To measure the toxicity of these harmful generations, we employ automatic evaluation models pre-trained on toxic datasets, including Perspective API and toxic classifiers (Hanu & Unitary team, 2020) with BERT (Kenton & Toutanova, 2019) and RoBERTa (Liu et al., 2019). (Section 4)
  - [Jailbreak in pieces: Compositional Adversarial Attacks on Multi-Modal Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/83170ccee5543b872f4de71002f21aad-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > For harmlessness, we follow (Li et al., 2024b) and utilize metrics Expected Maximum Toxicity (EMT) and Toxicity Probability (TP) from the Perspective API to examine the harmful content (Section 4.1).
  - [Token-Aware Editing of Internal Activations for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.480.pdf)

### Associated with
- **RealToxicityPrompts** (measurements)
  > “For toxicity evaluation, we utilize the PERSPECTIVE API (Lees et al., 2022) for REALTOXICITYPROMPTS”
  - [Monet: Mixture of Monosemantic Experts for Transformers](https://proceedings.iclr.cc/paper_files/paper/2025/file/382c35d1a57c07055dfcba58dd39e012-Paper-Conference.pdf)
- **Human evaluation** (measurements)
  > “we randomly sample 780 ... toxicity outputs (for Perspective API) ... We additionally evaluate these samples with human annotators”
  - [Exploring the Impact of Personality Traits on LLM Bias and Toxicity](https://aclanthology.org/2025.emnlp-main.206.pdf)
