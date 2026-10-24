# Sentence completion
**Type:** Behavior  
**Referenced in:** 32 papers  
**Also known as:** Sentence completion reasoning, Last word completion, Content analysis, Sentence continuation  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is selecting or generating the most plausible continuation of a partial sentence or surrounding context. Most definitions allow either free generation or choosing among options, and the context ranges from a phrase or sentence to a paragraph or passage ending; some papers narrow it further to predicting a final word or the next sentence. In the generative versions, authors often explicitly prefix prompts with "Complete the sentence:", while evaluative versions describe success as choosing the correct or better continuation from candidate endings.

**Variants.** Papers study several named variants. A common line uses sentence completion for commonsense reasoning, including "sentence completion reasoning" and challenging completion scenarios, while other work treats it as "last word completion" or "content analysis", where the model predicts a passage's missing final word and relies on long-range or narrative context. Smaller variants cast it as "sentence continuation", selecting the better next sentence between two options, or as graph-based completion, predicting the remaining text of a node from its existing text plus surrounding graph information; some papers also use sentence-completion prompts to elicit stereotypical continuations or to format segments for fine-tuning and probing.

**Space of elicitation and scores.** Papers link sentence completion to 5 measurement instruments. HellaSwag is the most frequently linked instrument, followed by COPA, LAMBADA, SWAG, and StereoSet; COPA is also explicitly labeled a sentence-completion measure. Collectively, the linked instruments include challenging commonsense completion tasks, passage-final word prediction, and gapped-sentence completions with stereotypical, anti-stereotypical, and meaningless options.

**What it is taken as evidence of.** No construct is linked to sentence completion as evidence of. Separately, one paper relates it to textual reasoning within a natural language reasoning suite.

## Sources

**[ESPACE: Dimensionality Reduction of Activations for Model Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/1f6591cc41be737e9ba4cc487ac8082d-Paper-Conference.pdf)**
> Selecting or generating the most plausible continuation of a sentence or context.

**[Learning to Plan Before Answering: Self-Teaching LLMs to Learn Abstract Plans for Problem Solving](https://proceedings.iclr.cc/paper_files/paper/2025/file/821a6e5681b072351fd3c21fac44739a-Paper-Conference.pdf) (as "Sentence completion reasoning")**
> The task behavior of selecting or generating the correct completion for a given sentence context.

**[Scaling Diffusion Language Models via Adaptation from Autoregressive Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0fa81c3f0d57f95b8776de3a248ef0ed-Paper-Conference.pdf) (as "Last word completion")**
> The observable task of predicting the final word of a text passage, which often requires understanding long-range context.

**[Rodimus*: Breaking the Accuracy-Efficiency Trade-Off with Efficient Attentions](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c08508131c3a50991f42dae7f69e1c-Paper-Conference.pdf) (as "Content analysis")**
> The task of analyzing a passage of text to predict a missing final word, testing the model's ability to understand narrative context.

**[DRPruning: Efficient Large Language Model Pruning through Distributionally Robust Optimization](https://aclanthology.org/2025.acl-long.1414.pdf) (as "Sentence continuation")**
> Generating or selecting the most plausible next sentence in a coherent text passage, testing local and global coherence.

## Relationships

### Sentence completion →
- **HellaSwag** (measurements) — *measured_by*
  > Hellaswag: Can a machine really finish your sentence? (Section References [46])
  - [Mixture of Tokens: Continuous MoE through Cross-Example Aggregation](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc427eb348789b190e3ea050cceff8a3-Paper-Conference.pdf)
- **StereoSet** (measurements) — *measured_by*
  > This task contains 765 sentences, each with a gap and three possible completions: stereotypical, anti-stereotypical, and meaningless. (Section 2.3)
  - [Debiasing Algorithm through Model Adaptation](https://proceedings.iclr.cc/paper_files/paper/2024/file/05aedcaf4bc6e78a5e22b4cf9114c5e8-Paper-Conference.pdf)
- **COPA** (measurements) — *measured_by*
  > COPA (Gordon et al., 2012) for sentence completion (Section 4.1).
  - [Merge, Then Compress: Demystify Efficient SMoE with Hints from Its Routing Policy](https://proceedings.iclr.cc/paper_files/paper/2024/file/3d09a88c3372cdb79401fde592ca4db8-Paper-Conference.pdf)
- **SWAG** (measurements) — *measured_by*
  > SWAG (Zellers et al., 2018) and HellaSwag (HSwag) (Zellers et al., 2019) requires sentence completions about challenging commonsense scenarios. (Section 4.1)
  - [NoVo: Norm Voting off Hallucinations with Attention Heads in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/db6461eaf0eaeaad1d9c4a70e4818cbd-Paper-Conference.pdf)

### Associated with
- **Textual reasoning** (behaviors tasks)
  > Natural language reasoning suite consists of 11 benchmarks that involve natural language based reasoning such as Question Answering, natural language inference (NLI), sentence completion, co-reference resolution, and general intelligence.
  - [To Code or Not To Code? Exploring Impact of Code in Pre-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/c513d1786f85531fac7050947736265f-Paper-Conference.pdf)
