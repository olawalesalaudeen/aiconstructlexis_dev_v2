# Repetitive generation
**Type:** Behavior  
**Referenced in:** 23 papers  
**Also known as:** Repetitive text generation, Repetition, Parroting, Meaningless repetition, Content repetition, Token repetition, Duplication, Text repetition, Oscillatory hallucination  

## State of the Field

**Space of definitions.** Across papers, the dominant framing treats this as a failure mode in which outputs contain repeated tokens, words, phrases, sentences, or entire utterances, often described as duplicate fragments or unproductive loops that degrade meaning, readability, coherence, or conciseness. When papers specify judging criteria, they usually ask whether a response repeats itself, including repeated list items, or whether repetitive tokens or utterances affect meaning. A smaller line of work narrows the behavior to meaningless or unproductive repetition, such as continuing with repeated tokens after an answer or getting trapped in repetitive reasoning sequences on hard tasks.

**Variants.** Papers study it across several settings. Common variants include generic repetition in free text, duplication within summaries, and token repetition under an explicit prompt to repeat a single word; smaller lines examine dialogue "parroting" across turns, code outputs with repeated assertions or comments, translation "oscillatory hallucination," and repeated character sequences in no-space content. Some papers also describe it as emerging after excessive editing strength or under preference optimization, where outputs become overly long, repetitive, or incoherent.

**Space of elicitation and scores.** Only one measurement instrument is explicitly linked to it, Human evaluation, which papers use with guidelines such as checking for repetitive tokens or utterances that affect meaning. Another human-evaluation formulation asks whether the response repeats itself, including repeated list items. Some papers also describe scoring proxies rather than linked instruments, for example TTR to capture repetitiveness, TE where lower values mean many repeated tokens with poor readability, and regular-expression detection of word or character repetition.

**What it is taken as evidence of.** Construct-level use is sparse. Only one construct is linked, Utility preservation, and papers frame that link as related rather than as a direct indicator. Papers more often connect the behavior to other behaviors: it is related to overthinking, reward hacking, and style transfer, and one paper claims a causal relationship from repetitive generation to training data regurgitation, stating that repeated tokens can confuse models and create a vulnerability for leakage attacks.

## Sources

**[Segment-Level Diffusion: A Framework for Controllable Long-Form Generation with Diffusion Language Models](https://aclanthology.org/2025.acl-long.210.pdf) (as "Repetition")**
> An observable failure mode where the model generates repetitive tokens, phrases, or entire utterances that degrade the quality and meaning of the text.

**[ReLearn: Unlearning via Learning for Large Language Models](https://aclanthology.org/2025.acl-long.297.pdf) (as "Repetitive text generation")**
> An observable failure mode where the model produces outputs consisting of repeating words or phrases.

**[SOTOPIA-Ω: Dynamic Strategy Injection Learning and Social Instruction Following Evaluation for Social Agents](https://aclanthology.org/2025.acl-long.1203.pdf) (as "Parroting")**
> Repeating similar or nearly identical actions across multiple turns in a dialogue, resulting in low response diversity despite potential goal achievement.

**[Sparse Activation Editing for Reliable Instruction Following in Narratives](https://aclanthology.org/2025.emnlp-main.1311.pdf)**
> Producing overly repetitive text as a failure mode after excessive editing strength.

**[Weights-Rotated Preference Optimization for Large Language Models](https://aclanthology.org/2025.emnlp-main.1329.pdf) (as "Meaningless repetition")**
> The observable pattern of repeating phrases, sentences, or ideas without adding new information, often as a result of reward hacking in preference optimization.

**[Rethinking Repetition Problems of LLMs in Code Generation](https://aclanthology.org/2025.acl-long.48.pdf) (as "Content repetition")**
> The observable repetition of identical or nearly identical tokens, expressions, or comments in the generated code, such as repeated assertions or print statements.

**[Interpreting the Repeated Token Phenomenon in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yona25a/yona25a.pdf) (as "Token repetition")**
> Producing the same input token repeatedly when prompted with a repetition task.

**[BooookScore: A systematic exploration of book-length summarization in the era of LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf) (as "Duplication")**
> Repeating the same or very similar information multiple times within the summary, reducing conciseness and coherence.

**[RAP: A Metric for Balancing Repetition and Performance in Open-Source Large Language Models](https://aclanthology.org/2025.naacl-long.69.pdf) (as "Text repetition")**
> Generating repeated word sequences or repeated character sequences within no-space content.

**[Mitigating Hallucinated Translations in Large Language Models with Hallucination-focused Preference Optimization](https://aclanthology.org/2025.naacl-long.175.pdf) (as "Oscillatory hallucination")**
> A repetitive output pattern in translation where a sequence of tokens is excessively repeated, indicating a form of degenerate generation.

## Relationships

### Repetitive generation →
- **Human evaluation** (measurements) — *measured_by*
  > To address this, we extend human evaluation guidelines from Clark et al. (2023), assessing repetition, fluency, coherence, compatibility (ROCStories/DialogSum), and hallucination (DeliData): (Section 4.2)
  - [Segment-Level Diffusion: A Framework for Controllable Long-Form Generation with Diffusion Language Models](https://aclanthology.org/2025.acl-long.210.pdf)
- **Training data regurgitation** (behaviors tasks) — *causes*
  > Nasr et al. (2023) first observed that repeated tokens could confuse models, creating a vulnerability exploitable for training data leakage attacks. (Section 5)
  - [Interpreting the Repeated Token Phenomenon in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yona25a/yona25a.pdf)

### Associated with
- **Style transfer** (behaviors tasks)
  > First, we observe repetitions and hallucinations in some transferred texts. (Limitations)
  - [Style Transfer with Multi-iteration Preference Optimization](https://aclanthology.org/2025.naacl-long.135.pdf)
- **Reward hacking** (behaviors tasks)
  > We observed that with enough training compute, the model started to show signs of reward hacking, where it increased the lengths of its CoTs on hard questions using repetition rather than learning to solve them. (Section 4.6)
  - [Demystifying Long Chain-of-Thought Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25ae/yang25ae.pdf)
