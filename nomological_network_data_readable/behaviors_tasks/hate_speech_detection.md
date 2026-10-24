# Hate speech detection
**Type:** Behavior  
**Referenced in:** 20 papers  
**Also known as:** Hate type classification, Implicit hate speech classification, Hate speech recognition, Implicit hate classification, Hate speech classification  

## State of the Field

**Space of definitions.** Across the papers, the dominant framing is automatic classification of whether a text contains hate speech, hateful content, or content that promotes violence toward individuals or groups, often with reference to protected or other group characteristics. Most definitions treat success as assigning a hate versus non-hate label to a text or tweet, sometimes with fixed outputs such as "HS" and "NOT_HS." Smaller lines of work use broader label sets, including hate, offensive, and safe, or predefined hate types such as dehumanization, derogation, animosity, threatening, and support; another subset targets implicit hate by asking for the implied hateful statement or target context.

**Variants.** Variants center on different forms and settings of the task. Papers study implicit hate speech, including classification of subtle or indirect cues and tasks where a tweet is mapped to its implied statement, and one line of work discusses dog whistles as a form of hate speech that detectors try to identify. Other variants add source or subject context, or shift from text-only inputs to multimodal meme-style inputs built from an image and optional caption, where the model selects hate speech, non-hate speech, or sometimes an additional "I don't know" option. One paper also reports it as related to content moderation.

**Space of elicitation and scores.** Papers link this behavior to 2 measurement instruments: Hateful Memes and ToxiGen. Hateful Memes is described as a benchmark for multimodal hate speech detection, while ToxiGen is described as a large-scale machine-generated dataset for hate speech detection. Elicitation and scoring are usually categorical, most often as binary hate versus non-hate judgments, though some papers use multi-class labels, multiple-choice prompting, or human-annotated categories.

**What it is taken as evidence of.** Papers do not link this behavior to any construct.

## Sources

**[Making FETCH! Happen: Finding Emergent Dog Whistles Through Common Habitats](https://aclanthology.org/2025.acl-long.284.pdf)**
> The observable task of identifying and classifying text that expresses hatred or promotes violence towards individuals or groups based on certain characteristics.

**[Beyond Hate Speech: NLP's Challenges and Opportunities in Uncovering Dehumanizing Language](https://aclanthology.org/2025.emnlp-main.1370.pdf) (as "Hate type classification")**
> Assigning a text to one of several predefined hate categories, including dehumanization, derogation, animosity, threatening, and support.

**[SOCIAL SCAFFOLDS: A Generalization Framework for Social Understanding Tasks](https://aclanthology.org/2025.emnlp-main.1485.pdf) (as "Implicit hate speech classification")**
> The task of classifying text containing different forms of implicit hate speech, which requires understanding subtle or indirect cues.

**[Iterative Multilingual Spectral Attribute Erasure](https://aclanthology.org/2025.emnlp-main.1488.pdf) (as "Hate speech recognition")**
> The task of classifying a given text, such as a tweet, as containing hate speech or not.

**[Context Steering: Controllable Personalization at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/db178cd03313e23cffb8937e93f0d464-Paper-Conference.pdf) (as "Implicit hate classification")**
> Assigning a tweet or text to the implied hateful statement or target context it most likely expresses.

**[SMAB: MAB based word Sensitivity Estimation Framework and its Applications in Adversarial Text Generation](https://aclanthology.org/2025.naacl-long.463.pdf) (as "Hate speech classification")**
> The task of identifying and classifying text that contains hate speech.

## Relationships

### Hate speech detection →
- **Hateful Memes** (measurements) — *measured_by*
  > Multimodal fusion takes in the image, text, and a description of the task, and then outputs a prediction, which can include... hate speech detection in HATEFUL MEMES... (Section 2.2).
  - [HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf)
- **ToxiGen** (measurements) — *measured_by*
  > ToxiGen (Hartvigsen et al., 2022): A large-scale machine-generated dataset for hate speech detection. (Section 7.1)
  - [ImpScore: A Learnable Metric For Quantifying The Implicitness Level of Sentences](https://proceedings.iclr.cc/paper_files/paper/2025/file/bd6bb13e78da078d8adcabbe6d9ca737-Paper-Conference.pdf)

### Associated with
- **Content moderation** (behaviors tasks)
  > We evaluate on 7 content moderation tasks for 8 different cultures to detect the following content: hate speech, offensive language, spam speech, abusive speech, bias speech, threat speech, and stance of speech in zero-shot evaluation (Section 4.1)
  - [CulturePark: Boosting Cross-cultural Understanding in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/77f089cd16dbc36ddd1caeb18446fbdd-Paper-Conference.pdf)
