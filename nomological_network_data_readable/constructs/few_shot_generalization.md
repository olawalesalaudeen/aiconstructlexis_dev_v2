# Few-shot generalization
**Type:** Construct  
**Referenced in:** 5 papers  
**Also known as:** Few-shot learning ability, Few-shot ability  

## State of the Field

**Definition agreement:** Consensus. Most papers define few-shot generalization as a model's ability to learn, adapt, or generalize to new tasks or scenarios from only a few examples or small amounts of task-specific data. A few papers add mechanisms or settings such as in-context examples, pretraining, or reliance on abstract rather than surface patterns, but these are refinements of the same core capability rather than different phenomena.

**Space of definitions.** Across the papers, the prevailing usage treats few-shot generalization as a model-level capacity to generalize, learn, or adapt from only a few examples or very small amounts of task-specific data. Most definitions keep this broad, describing generalization to new tasks, unseen scenarios, or novel settings under limited data. Some authors add narrower emphases, framing it as leveraging domain-level abstractions rather than surface patterns, inferring broader rules or properties from a few in-context examples, learning effective policies from little task data, or adapting to new prediction tasks with minimal fine-tuning samples.

**Space of facets.** Across definitions, the term spans several settings: generalization to new tasks from a few examples, inference of general rules or relevant properties from limited in-context examples, low-data policy learning, and adaptation to novel prediction scenarios or frequency bands with minimal fine-tuning. The clearest variation is scope, with some papers using it for broad few-example generalization and others for a more task-specific form of low-data adaptation.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to the construct. The papers that mention it do so in few-shot, low-data, or low-resource settings, including performance in few-shot scenarios, effectiveness in low-resource scenarios, and a few-shot benchmark on novel scenarios and frequency bands outside pre-training; these uses stay close to the definitions' limited-data framing.

## Sources

**[BayesPrompt: Prompting Large-Scale Pre-Trained Language Models on Few-shot Inference via Debiased Domain Abstraction](https://proceedings.iclr.cc/paper_files/paper/2024/file/5fcfda9e2a28c62f1ba54bcfa09ebdbc-Paper-Conference.pdf)**
> The capacity of a model to generalize effectively from very limited training examples by leveraging debiased domain-level abstractions rather than surface-level patterns.

**[Unleashing the Power of Pre-trained Language Models for Offline Reinforcement Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c7793beb7f32b559df55d48370f2b8ae-Paper-Conference.pdf) (as "Few-shot learning ability")**
> The latent capacity to learn effective policies from very small amounts of task-specific data, leveraging prior knowledge from language model pre-training.

**[A Generative Pre-Trained Language Model for Channel Prediction in Wireless Communications Systems](https://aclanthology.org/2025.emnlp-main.677.pdf) (as "Few-shot ability")**
> The model's capability to adapt to new prediction tasks with minimal fine-tuning samples, indicating efficient learning from limited data.
