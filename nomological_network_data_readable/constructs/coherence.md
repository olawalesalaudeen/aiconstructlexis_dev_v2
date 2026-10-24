# Coherence
**Type:** Construct  
**Referenced in:** 98 papers  
**Also known as:** Semantic coherence, Coherency, Contextual consistency, Dialogue coherence, Plot quality, Story coherence, Plot coherence, Topic coherence, Text coherence, Argument coherence, Structural consistency, Contextual coherence, Response coherence, Chat consistency  

## State of the Field

**Definition agreement:** Consensus. Most papers define coherence as an output-level quality where generated text, dialogue, summaries, stories, or speech are logically connected, internally consistent, well-structured, and aligned with the surrounding context or topic, often across multiple turns or long sequences. A few papers use the term for model-level agreement across query modes or stability across equivalent inputs, but these are minority outliers compared with the dominant shared meaning.

**Space of definitions.** Across papers, coherence is most commonly treated as an output or interaction quality: generated text, summaries, dialogue, stories, lyrics, surveys, or fact-checks should remain logical, internally consistent, contextually relevant, and well-structured, often over long spans or multiple turns. Many definitions add topic maintenance or continuity with prior context, such as logical flow between a continuation and its prefix, consistency with earlier turns, or keeping a unified narrative thread. A smaller line of work uses narrower model-level meanings, defining coherence as agreement between generative and discriminative judgments, as semantic closeness between a prompt and its response, or as producing semantically equivalent answers for semantically equivalent questions. The main disagreement is therefore between coherence as output quality, coherence as internal model consistency, and coherence as stability across input variations.

**Space of facets.** Papers divide the term into domain-specific variants rather than a single shared taxonomy. Recurrent labels include semantic, contextual, dialogue, response, story, plot, topic, text, and argument coherence, alongside nearby names such as coherency, contextual consistency, structural consistency, and chat consistency; one dialogue definition breaks chat consistency into initial-intent alignment, smooth information flow, and contextual relevance, and one lyrics paper distinguishes local from global coherence. The same label is also used for different objects: topic coherence concerns whether utterances belong to the same topic, plot or story coherence concerns event progression and narrative structure, and argument coherence concerns whether counterspeech offers specific and coherent arguments. Some papers explicitly separate coherence from fluency or factual correctness, noting that text can be fluent yet poorly ordered, or coherent yet not factually correct.

**Space of measurement.** Operationalization is broad, with 9 linked measurement instruments and 4 linked behavioral indicators. The instruments named most often are G-Eval, Human evaluation, LLM-as-a-judge, HelpSteer, and HelpSteer2, spanning LLM-based grading, direct human ratings, and preference or reward annotations, with benchmark-based instruments also appearing. Papers also operationalize coherence through embedding similarity between prefix and continuation or prompt and response, similarity among answers to semantically equivalent questions, NLI-based checks over dialogue turns, sentence-order perturbations that create incoherent texts, and perplexity or log-perplexity as indirect quality signals. These operationalizations usually match definitions centered on logical flow and contextual consistency, though some narrow the construct to semantic closeness, answer stability across paraphrases, or downstream task accuracy.

**Links.** Relationship claims are varied, with 13 linked constructs. Papers claim causal relationships from several capacities and mechanisms to coherence, including context retention and causal reasoning, with additional causal claims also appearing elsewhere. One paper reports that coherence correlates with helpfulness, and says it is a weaker predictor in HelpSteer2 than in HelpSteer. Other work treats coherence as related to creativity and truthfulness, alongside other linked constructs and behavioral indicators.

## Sources

**[BooookScore: A systematic exploration of book-length summarization in the era of LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)**
> The degree to which a language model's generative and discriminative judgments align, reflecting a consistent internal assessment of correctness across different query modes.

**[ARGS: Alignment as Reward-Guided Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/4d1344317478ad99ff5f4e414aeab689-Paper-Conference.pdf) (as "Semantic coherence")**
> The latent ability of a model to generate text that is contextually consistent and semantically relevant to the preceding input.

**[MMRole: A Comprehensive Framework for Developing and Evaluating Multimodal Role-Playing Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a5c7206fd66e8314bb21a04492359353-Paper-Conference.pdf) (as "Coherency")**
> The extent to which an agent's responses maintain a consistent line of dialogue, avoiding contradictions with previous turns or internal inconsistencies.

**[DrDiff: Dynamic Routing Diffusion with Hierarchical Attention for Breaking the Efficiency-Quality Trade-off](https://aclanthology.org/2025.emnlp-main.474.pdf) (as "Contextual consistency")**
> The tendency to keep generated content aligned with earlier context and avoid contradictions or drift as sequence length grows.

**[Memory OS of AI Agent](https://aclanthology.org/2025.emnlp-main.1318.pdf) (as "Dialogue coherence")**
> The quality of a conversation where responses are logically connected, consistent, and relevant to the preceding context, especially over long interactions.

**[Agents' Room:  Narrative Generation through Multi-step Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/0fbc8a83d93dd8021a4dd8d2d34138eb-Paper-Conference.pdf) (as "Plot quality")**
> The degree to which a story has a recognizable and coherent structure with events that move the narrative forward without logical or conceptual inconsistencies.

**[Generating Long-form Story Using Dynamic Hierarchical Outlining with Memory-Enhancement](https://aclanthology.org/2025.naacl-long.63.pdf) (as "Story coherence")**
> The overall quality of a long-form story in which plot development, context, and expression remain consistent and readable.

**[Generating Long-form Story Using Dynamic Hierarchical Outlining with Memory-Enhancement](https://aclanthology.org/2025.naacl-long.63.pdf) (as "Plot coherence")**
> The degree to which the sequence of events in a story follows a logical and causally sound progression, resulting in a fluent and understandable plot.

**[A Unified Supervised and Unsupervised Dialogue Topic Segmentation Framework Based on Utterance Pair Modeling](https://aclanthology.org/2025.naacl-long.252.pdf) (as "Topic coherence")**
> The latent degree to which utterances within a dialogue segment belong to the same topic, inferred from their semantic and structural relationships.

**[Self-calibration for Language Model Quantization and Pruning](https://aclanthology.org/2025.naacl-long.509.pdf) (as "Text coherence")**
> The degree to which generated calibration text is fluent, semantically plausible, and structurally consistent, as an indicator of quality in synthetic data.

**[CSEval: Towards Automated, Multi-Dimensional, and Reference-Free Counterspeech Evaluation using Auto-Calibrated LLMs](https://aclanthology.org/2025.naacl-long.279.pdf) (as "Argument coherence")**
> The degree to which a counterspeech response presents specific, logically consistent, and evidence-based arguments that refute the hateful content.

**[SurveyGen: Quality-Aware Scientific Survey Generation with Large Language Models](https://aclanthology.org/2025.emnlp-main.136.pdf) (as "Structural consistency")**
> The degree to which the generated survey follows a coherent and logically organized structure with appropriate section divisions and thematic development, matching human-authored conventions.

**[Dialogue Without Limits: Constant-Sized KV Caches for Extended Response in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ghadia25a/ghadia25a.pdf) (as "Contextual coherence")**
> The latent ability of an LLM to maintain semantic and structural consistency across long sequences of generated text by preserving relevant long-range dependencies.

**[NTPP: Generative Speech Language Modeling for Dual-Channel Spoken Dialogue via Next-Token-Pair Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25by/wang25by.pdf) (as "Response coherence")**
> The quality of a model's generated responses being logically connected and relevant to the ongoing conversation.

**[ConsistentChat: Building Skeleton-Guided Consistent Multi-Turn Dialogues for Large Language Models from Scratch](https://aclanthology.org/2025.emnlp-main.424.pdf) (as "Chat consistency")**
> The latent ability of a dialogue model to maintain semantic coherence across multiple turns, including alignment with initial intent, logical information flow, and contextual relevance of responses.

## Relationships

### Coherence →
- **Human evaluation** (measurements) — *measured_by*
  > To address this, we extend human evaluation guidelines from Clark et al. (2023), assessing repetition, fluency, coherence, compatibility (ROCStories/DialogSum), and hallucination (DeliData): (Section 4.2)
  - [Segment-Level Diffusion: A Framework for Controllable Long-Form Generation with Diffusion Language Models](https://aclanthology.org/2025.acl-long.210.pdf)
- **G-Eval** (measurements) — *measured_by*
  > For LLM-based evaluation, we employed G-EVAL(Liu et al., 2023), a state-of-the-art metric designed to assess various qualitative aspects of large language model outputs, including Fluency, Coherence, Naturalness, Empathy, and Patient-Centricity, where higher scores indicate better performance. (Section 5.1)
  - [AI Chatbots as Professional Service Agents: Developing a Professional Identity](https://aclanthology.org/2025.emnlp-main.652.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > By the prompts, the LLM judge must consider (a) the response’s naturalness, coherence, engagingness and groundedness. (Section 4.3)
  - [SD-Eval: A  Benchmark Dataset for Spoken Dialogue Understanding Beyond Words](https://proceedings.neurips.cc/paper_files/paper/2024/file/681fe4ec554beabdc9c84a1780cd5a8a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **HelpSteer** (measurements) — *measured_by*
  > For HelpSteer, we use https://huggingface.co/Haoxiang-Wang/ RewardModel-Mistral-7B-for-DPA-v1 for all attributes of rewards, including helpfulness, correctness, coherence, complexity and verbosity.
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
- **Stealthiness** (constructs) — *causes*
  > Thus Eq. (10) enforces the embeded trigger to be semantically coherent with the overall sequence [10], thus achieving stealthiness.
  - [AgentPoison: Red-teaming LLM Agents via Poisoning Memory or Knowledge Bases](https://proceedings.neurips.cc/paper_files/paper/2024/file/eb113910e9c3f6242541c1652e30dfd6-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *correlates*
  > In Table 2, we observe that coherence is a much weaker predictor of helpfulness in HelpSteer2 (Pearson’s R=0.4979) compared to HelpSteer (Pearson’s R=0.6348).
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BERTScore** (measurements) — *measured_by*
  > "We evaluate the summary quality in relevance, coherence, factual consistency, and text compression using BertScore (Zhang et al., 2020b), HHEM-2.1-Open (Vectara, 2024), and summary length."
  - [Evaluating Small Language Models for News Summarization: Implications and Factors Influencing Performance](https://aclanthology.org/2025.naacl-long.253.pdf)
- **Perplexity** (measurements) — *measured_by*
  > “Reading the texts generated by the text diffusion models also reveals that they are often incoherent, even in the non-private setting, as estimated by their high perplexity scores.”
  - [Private Synthetic Text Generation with Diffusion Models](https://aclanthology.org/2025.naacl-long.532.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > MT-Bench, on the other hand, provides a fine-grained evaluation through multi-turn conversational tasks, evaluating not just correctness, but also coherence and fluency. (Section 5.2)
  - [Reflection-Window Decoding: Text Generation with Selective Refinement](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tang25a/tang25a.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > “We collect a random subset of 50 tasks ... from the Alpaca-Eval dataset ... An LLM-as-a-Judge then scores the output on how well it followed the instructions and how coherent it was.”
  - [Precise In-Parameter Concept Erasure in Large Language Models](https://aclanthology.org/2025.emnlp-main.960.pdf)
- **GSM8K** (measurements) — *measured_by*
  > preserving coherence, as measured by accuracy on the GSM8K, MATH, HumanEval and MMLU-Pro datasets.
  - [Group-Aware Reinforcement Learning for Output Diversity in Large Language Models](https://aclanthology.org/2025.emnlp-main.1649.pdf)
- **MATH** (measurements) — *measured_by*
  > preserving coherence, as measured by accuracy on the GSM8K, MATH, HumanEval and MMLU-Pro datasets.
  - [Group-Aware Reinforcement Learning for Output Diversity in Large Language Models](https://aclanthology.org/2025.emnlp-main.1649.pdf)
- **Factuality** (constructs) — *causes*
  > Improved coherence in turn leads to improved accuracy on factual tasks. (Section 1)
  - [The Consensus Game: Language Model Generation via Equilibrium Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/17a9bfda8be2301e24f232fb32f1e0fa-Paper-Conference.pdf)

### → Coherence
- **Context retention** (constructs) — *causes*
  > This highlights the memory retention issue in long-context models, which often leads to a loss of coherence and adherence to task instructions. (Section 3.2)
  - [LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf)
- **Understanding** (constructs) — *causes*
  > We conjecture that the instability, or lack of coherence, is a symptom of the model not being able to fully understand a request, i.e., accessing its parametric knowledge necessary for generating a correct answer. (Section 1)
  - [Analyzing and Improving Coherence of Large Language Models in Question Answering](https://aclanthology.org/2025.naacl-long.588.pdf)
- **Causal reasoning** (constructs) — *causes*
  > causal reasoning is pivotal for maintaining coherent and specific empathetic interactions (Section 5.2)
  - [ECC: An Emotion-Cause Conversation Dataset for Empathy Response](https://aclanthology.org/2025.emnlp-main.306.pdf)

### Associated with
- **Generation diversity** (constructs)
  > Thus, the best choice of threshold must strike a balance between diversity (i.e., including as many tokens as possible in the set of candidates) and coherence (i.e., avoiding sampling tokens outside the true support). (Section 2)
  - [Closing the Curious Case of Neural Text Degeneration](https://proceedings.iclr.cc/paper_files/paper/2024/file/34899013589ef41aea4d7b2f0ef310c1-Paper-Conference.pdf)
- **Text generation** (behaviors tasks)
  > Coherence evaluates the semantic relatedness between each prompt and its generated response.
  - [Collab: Controlled Decoding using Mixture of Agents for LLM Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/2e79dce47c5bbe738dff9c05ace8a037-Paper-Conference.pdf)
- **Creativity** (constructs)
  > A central challenge is managing the trade-off between creativity and coherence, which is influenced by the sampling strategy during text generation. (Section 1)
  - [Turning Up the Heat: Min-p Sampling for Creative and Coherent LLM Outputs](https://proceedings.iclr.cc/paper_files/paper/2025/file/afa5f124e36bed5cc2125067005d43f5-Paper-Conference.pdf)
- **Stability** (constructs)
  > These models, however, often suffer from instability or lack of coherence, that is the ability of the models to generate semantically equivalent outputs when receiving diverse yet semantically equivalent input variations. (Abstract)
  - [Analyzing and Improving Coherence of Large Language Models in Question Answering](https://aclanthology.org/2025.naacl-long.588.pdf)
- **Semantic textual similarity** (behaviors tasks)
  > Besides, these works typically measure semantic similarity via token-level embedding distances. Such approach overlooks contextual information, often leading to reduced contextual semantic coherence. (Section 1)
  - [Cape: Context-Aware Prompt Perturbation Mechanism with Differential Privacy](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25g/wu25g.pdf)
- **Conversational ability** (constructs)
  > "NTPP, significantly improves the conversational abilities of SLMs in terms of turn-taking prediction, response coherence, and naturalness"
  - [NTPP: Generative Speech Language Modeling for Dual-Channel Spoken Dialogue via Next-Token-Pair Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25by/wang25by.pdf)
