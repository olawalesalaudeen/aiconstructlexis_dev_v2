# Emotion analysis
**Type:** Behavior  
**Referenced in:** 46 papers  
**Also known as:** Emotion classification, Emotion recognition in conversations, Emotion detection, Emotion recognition, Emotional state extraction, Emotion label generation, Emotional Tone Interpretation, Emotion recognition in conversation, Text emotion detection, Emotion prediction  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats emotion analysis as label assignment: identifying which emotions are expressed in text or an utterance, often for a target turn in dialogue with the prior conversational history as context. Many definitions use predefined categories and allow one or more labels for text, dialogue utterances, or multimodal posts, while smaller lines of work broaden the behavior to extracting emotional connotations in sentences, identifying dominant emotions in a document, or interpreting emotional tone in audio. A few papers move beyond fixed-label classification by asking for free-text emotion descriptions of a narrative character or by allowing labels outside a fixed set for multimodal input.

**Variants.** Papers use several nearby names for this behavior, including emotion classification, emotion detection, emotion recognition, emotion recognition in conversations, emotional state extraction, emotion label generation, emotional tone interpretation, and emotion prediction. The studied settings range from text classification and social media posts to dialogue-level recognition that uses previous turns or neighboring utterances, plus multimodal image-text inputs, audio recordings and vocalizations, physiological signals, Persian text, rhetorical language such as hyperbole and metaphor, and narrative sentences centered on a highlighted character. Some multimodal work further separates coarse-grained and fine-grained classification, and audio reasoning work includes emotional shift detection.

**Space of elicitation and scores.** Papers measure this behavior with five instruments: GoEmotions, IEMOCAP, SemEval 2018 Task 1 E-c, MELD, and TweetEval. These linked instruments are used to assess emotion recognition or classification in multilabel text settings, conversational utterances, audio, and social media style tasks, with GoEmotions, IEMOCAP, and SemEval 2018 Task 1 E-c appearing most often among the named resources.

**What it is taken as evidence of.** Papers split the construct framing rather than tying the behavior to one dominant construct. The construct links are two related links, not direct measurement claims: emotion analysis is related to Emotion understanding in multimodal classification work, and related to Reasoning in audio work that places emotional tone interpretation within reasoning tasks. Beyond constructs, one paper claims a causal relationship from Object detection to Emotion analysis, stating that face detection lets a system focus on relevant regions and extract facial features, and another relates Emotion analysis to Time series classification in physiological-signal tasks.

## Sources

**[ResFormer: All-Time Reservoir Memory for Long Sequence Classification](https://aclanthology.org/2025.emnlp-main.566.pdf) (as "Emotion classification")**
> Assigning an emotional label (e.g., joy, fear, anger) to a given utterance based on its content and contextual history in a conversation.

**[Enhancing Hyperbole and Metaphor Detection with Their Bidirectional Dynamic Interaction and Emotion Knowledge](https://aclanthology.org/2025.acl-long.23.pdf)**
> Extracting and representing the emotional connotations present in a sentence, particularly those underlying rhetorical expressions.

**[CoE: A Clue of Emotion Framework for Emotion Recognition in Conversations](https://aclanthology.org/2025.acl-long.1148.pdf) (as "Emotion recognition in conversations")**
> The task of assigning a predefined emotion label to a specific utterance within a dialogue, given the preceding conversational history.

**[Generative or Discriminative? Revisiting Text Classification in the Era of Transformers](https://aclanthology.org/2025.emnlp-main.486.pdf) (as "Emotion detection")**
> Identifying specific emotions expressed in text, such as anger, joy, or fear, often used in social media analysis.

**[Large Language Models Do Multi-Label Classification Differently](https://aclanthology.org/2025.emnlp-main.126.pdf) (as "Emotion recognition")**
> The task of identifying and classifying human emotions expressed in text.

**[MultiAgentESC: A LLM-based Multi-Agent Collaboration Framework for Emotional Support Conversation](https://aclanthology.org/2025.emnlp-main.232.pdf) (as "Emotional state extraction")**
> The observable task of identifying and labeling a user's emotions from their utterances in a dialogue history.

**[CR4-NarrEmote: An Open Vocabulary Dataset of Narrative Emotions Derived Using Citizen Science](https://aclanthology.org/2025.emnlp-main.493.pdf) (as "Emotion label generation")**
> Producing free-text descriptions of the emotions a narrative character is feeling based on a given sentence.

**[MMAU: A Massive Multi-Task Audio Understanding and Reasoning Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/d36f208919582785db965fe648b9fe59-Paper-Conference.pdf) (as "Emotional Tone Interpretation")**
> The task behavior of identifying the emotional atmosphere or tone created by audio elements such as instruments or speech.

**[EmoDynamiX: Emotional Support Dialogue Strategy Prediction by Modelling MiXed Emotions and Discourse Dynamics](https://aclanthology.org/2025.naacl-long.81.pdf) (as "Emotion recognition in conversation")**
> The task of identifying and classifying the emotions expressed in utterances within a dialogue context.

**[Matina: A Large-Scale 73B Token Persian Text Corpus](https://aclanthology.org/2025.naacl-long.462.pdf) (as "Text emotion detection")**
> Identifying emotional categories (e.g., joy, anger) in Persian text, particularly in social media or informal content.

**[OV-MER: Towards Open-Vocabulary Multimodal Emotion Recognition](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lian25b/lian25b.pdf) (as "Emotion prediction")**
> The observable task of outputting one or more emotion labels given a multimodal input, particularly with the flexibility to use labels outside a fixed set.

## Relationships

### Emotion analysis →
- **GoEmotions** (measurements) — *measured_by*
  > GoEmotions (Demszky et al., 2020): Multilabel emotion recognition benchmark with 27 emotions. (Section 4.1)
  - [Aggregation Artifacts in Subjective Tasks Collapse Large Language Models' Posteriors](https://aclanthology.org/2025.naacl-long.284.pdf)
- **IEMOCAP** (measurements) — *measured_by*
  > ER | IEMOCAP Session 5 | Accuracy (Table 2)
  - [SALMONN: Towards Generic Hearing Abilities for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/476ab8f369e489c04187ba84f68cfa68-Paper-Conference.pdf)
- **SemEval 2018 Task 1 E-c** (measurements) — *measured_by*
  > SemEval 2018 Task 1 E-c (Mohammad et al., 2018) Multi-label emotion recognition of 11 emotions. (Section 3)
  - [Large Language Models Do Multi-Label Classification Differently](https://aclanthology.org/2025.emnlp-main.126.pdf)
- **MELD** (measurements) — *measured_by*
  > Emotion recognition is assessed on IEMOCAP (Busso et al., 2008) and MELD (Poria et al., 2019), with 1,241 and 2,608 utterances.
  - [Distilling an End-to-End Voice Assistant Without Instruction Training Data](https://aclanthology.org/2025.acl-long.388.pdf)
- **Zero-shot evaluation** (measurements) — *measured_by*
  > "We conduct comparisons on multiple emotion datasets with MLLMs Zero-shot, Zero-shot-CoT (Kojima et al., 2022) and sparseVLM (Zhang et al., 2024c)."
  - [Catch Your Emotion: Sharpening Emotion Perception in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fang25h/fang25h.pdf)
- **Chain-of-thought prompting** (measurements) — *measured_by*
  > "We conduct comparisons on multiple emotion datasets with MLLMs Zero-shot, Zero-shot-CoT (Kojima et al., 2022) and sparseVLM (Zhang et al., 2024c)."
  - [Catch Your Emotion: Sharpening Emotion Perception in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fang25h/fang25h.pdf)
- **TweetEval** (measurements) — *measured_by*
  > Multi-class tasks include emotion recognition (Mohammad et al., 2018) and irony detection (Van Hee et al., 2018) from the TweetEval benchmark (Barbieri et al., 2020)... (Section 4.1)
  - [Inceptive Transformers: Enhancing Contextual Representations through Multi-Scale Feature Learning Across Domains and Languages](https://aclanthology.org/2025.emnlp-main.1312.pdf)

### → Emotion analysis
- **Object detection** (behaviors tasks) — *causes*
  > The model's ability to detect faces is crucial for subsequent emotion recognition, as it allows the system to focus on the relevant regions of interest and extract facial features effectively.
  - [Emotion-LLaMA: Multimodal Emotion Recognition and Reasoning with Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/c7f43ada17acc234f568dc66da527418-Paper-Conference.pdf)

### Associated with
- **Emotion understanding** (constructs)
  > In this paper, we propose Sharpening Emotion Perception in Multimodal Large Language Models (SEPM)... The first stage performs coarse-grained emotion classification, generating textual prompts for the next stage... The second stage then completes fine-grained emotion classification based on this enhanced input. (Section 1, 3.2)
  - [Catch Your Emotion: Sharpening Emotion Perception in Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/fang25h/fang25h.pdf)
- **Time series classification** (behaviors tasks)
  > Specifically, we focus on various medical time series classification (TSC) tasks based on the physiological signals, including emotion recognition (Li et al., 2024a), sleep stage detection (Supratak et al., 2017; Dong et al., 2017), neurological disorder classification (Yang et al., 2022b; Zhang et al., 2022), etc. (Section 1).
  - [Efficient Personalized Adaptation for Physiological Signal Foundation Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25ah/wu25ah.pdf)
