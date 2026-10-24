# Stance detection
**Type:** Behavior  
**Referenced in:** 16 papers  
**Also known as:** Comment stance classification, Stance classification, Stance annotation  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats stance detection as classifying the attitude or position expressed in text toward a specific target, topic, issue, or proposition. Most definitions use ternary labels such as favor, against, and neutral, with close variants such as support, oppose, and neutral or agree, disagree, and neutral. A smaller line of work instead defines it over text pairs, where a reply or comment is labeled by its stance toward a parent comment or original post, and one such formulation says the output labels are annotated by human experts.

**Variants.** Papers study several variants under nearby names, including stance detection, stance classification, comment stance classification, and stance annotation. Beyond general target-based text classification, the variants include argument classification as affirmative versus negative, online political discussions treated as binary favor versus against, news headlines agreeing, neutral, or disagreeing with a target stance, topics such as abortions, climate change, and global warming, and post-comment settings where stance is assessed from the semantic and pragmatic relationship between a top comment and the post, sometimes with labels Support, Deny, or Extension.

**Space of elicitation and scores.** Papers measure it with 3 linked instruments. The most recurrent are SemEval-2016 Task 5 and VAST, followed by PStance; the linked papers describe them as stance detection datasets used for experiments and evaluation, including zero-shot, few-shot, and other challenging settings.

**What it is taken as evidence of.** No construct is linked to it in the papers, so they do not explicitly specify a broader construct that this behavior reflects.

## Sources

**[MPVStance: Mitigating Hallucinations in Stance Detection with Multi-Perspective Verification](https://aclanthology.org/2025.acl-long.53.pdf)**
> The observable task of identifying and classifying the attitude (e.g., favor, against, neutral) expressed in a text towards a specific target or topic.

**[MemeReaCon: Probing Contextual Meme Understanding in Large Vision-Language Models](https://aclanthology.org/2025.emnlp-main.176.pdf) (as "Comment stance classification")**
> Determining whether a comment supports, denies, or extends the original post, based on its semantic and pragmatic relationship to the post content.

**[CARE: A Disagreement Detection Framework with Concept Alignment and Reasoning Enhancement](https://aclanthology.org/2025.emnlp-main.671.pdf) (as "Stance classification")**
> The observable task of assigning a label (agree, disagree, or neutral) to a reply based on its relationship to a parent comment in a social media context.

**[Can Unconfident LLM Annotations Be Used for Confident Conclusions?](https://aclanthology.org/2025.naacl-long.179.pdf) (as "Stance annotation")**
> Classifying whether a text agrees, is neutral, or disagrees with a target stance.

## Relationships

### Stance detection →
- **VAST** (measurements) — *measured_by*
  > We validate the effectiveness of our method through extensive experiments on the SemEval-2016, and VAST datasets, showing that MPVStance outperforms state-of-the-art models in zero-shot, few-shot, and challenging scenarios. (Section 1)
  - [MPVStance: Mitigating Hallucinations in Stance Detection with Multi-Perspective Verification](https://aclanthology.org/2025.acl-long.53.pdf)
- **PStance** (measurements) — *measured_by*
  > We conduct experiments on the VAST, SEM16, and PStance datasets to evaluate our proposed method.
  - [MPRF: Interpretable Stance Detection through Multi-Path Reasoning Framework](https://aclanthology.org/2025.emnlp-main.24.pdf)
