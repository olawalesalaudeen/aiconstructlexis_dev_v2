# Text infilling
**Type:** Behavior  
**Referenced in:** 15 papers  
**Also known as:** Sequence infilling, Story infilling, Masked token infilling, Cloze completion, Fill-in-the-blank completion, Text insertion, Infilling  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats text infilling as conditional generation of missing text from surrounding context, usually a prefix and suffix, with success defined by producing a span that fits coherently between both sides and, in some definitions, respects given prompt tokens and their relative order. Some papers phrase the same behavior as filling masked-out fragments of a document or story, while others narrow it to masked-token prediction or a single scientific-word cloze. A smaller line of work instead operationalizes it as fill-in-the-blank completion, where the model generates or selects a treatment or profile detail, or fills a [MASK] slot so papers can compare Arab versus Western entity preferences.

**Variants.** The behavior appears in several settings: narrative story completion with a missing middle sentence or masked story fragments, non-sequential infilling of different parts of a sequence during diffusion generation, and insertion tasks where both prefix and suffix are given and the output must satisfy logical constraints. Other papers study flexible-length spans and positions without oracle span lengths, single scientific-term blanks, Arabic entity filling for cultural preference, and fill-in-the-blank probes aimed at localized medical treatment, unlearning targets, or personal-profile details.

**Space of elicitation and scores.** Papers link text infilling to 2 measurement instruments, ROCStories and WikiText-103. ROCStories is used for story infilling with short five-sentence stories, and WikiText-103 provides validation-set sequences for evaluating infilling performance. Elicitation usually masks a middle span between given contexts, though some setups require a single scientific word or compare candidate completions; scoring is sometimes reported with MAUVE over prompt masks, and one medical setup says it uses two complementary metrics.

**What it is taken as evidence of.** Among construct links, papers use text infilling as evidence of 1 construct, knowledge memorization. In that usage, fill-in-the-blank probes are used to "examine the memory of the original training data related to the unlearning targets," and no other construct link is reported by the papers.

## Sources

**[Scaling Diffusion Language Models via Adaptation from Autoregressive Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0fa81c3f0d57f95b8776de3a248ef0ed-Paper-Conference.pdf) (as "Story infilling")**
> The specific infilling task of generating a coherent narrative segment to complete a story.

**[Glauber Generative Model: Discrete Diffusion Models via Binary Classification](https://proceedings.iclr.cc/paper_files/paper/2025/file/125be378b39b10676f56e12e6923b902-Paper-Conference.pdf)**
> The task of generating text to fill in a missing portion of a document given the surrounding context (prefix and suffix).

**[Efficient Perplexity Bound and Ratio Matching in Discrete Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/23e6f78bdec844a9f7b6c957de2aae91-Paper-Conference.pdf) (as "Sequence infilling")**
> Filling in missing parts of a sequence non-sequentially during discrete diffusion generation.

**[Hidden No More: Attacking and Defending Private Third-Party LLM Inference](https://raw.githubusercontent.com/mlresearch/v267/main/assets/thomas25b/thomas25b.pdf) (as "Masked token infilling")**
> The task of predicting missing tokens in a sequence given the surrounding context, used as a proxy to evaluate the difficulty of reconstructing a full prompt from a partial one.

**[ClimaQA: An Automated Evaluation Framework for Climate Question Answering Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3eff068e195daace49955348de9f8398-Paper-Conference.pdf) (as "Cloze completion")**
> Filling in a missing scientific term in a sentence or phrase using the surrounding context.

**[Africa Health Check: Probing Cultural Bias in Medical LLMs](https://aclanthology.org/2025.emnlp-main.1639.pdf) (as "Fill-in-the-blank completion")**
> Generating or selecting a treatment completion for a medical scenario when presented with a prompt and two candidate responses—one traditional and one allopathic.

**[Adaptable Logical Control for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d15c16cf5619a2b1606da5fc88e3f1a9-Paper-Conference.pdf) (as "Text insertion")**
> The task of generating text to fill a gap between a given prefix and suffix, ensuring coherence with both contexts.

**[Amortizing intractable inference in large language models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bc667ac84ef58f2b5022da97a465cbab-Paper-Conference.pdf) (as "Infilling")**
> The task of generating a sequence of tokens that fits coherently between a given prefix and suffix context.

## Relationships

### Text infilling →
- **ROCStories** (measurements) — *measured_by*
  > “We use the ROCStories corpus ... Given the first 3 sentences and the last sentence, the goal is to generate the fourth sentence”
  - [Amortizing intractable inference in large language models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bc667ac84ef58f2b5022da97a465cbab-Paper-Conference.pdf)
- **WikiText-103** (measurements) — *measured_by*
  > Evaluation of text infilling performance using the MAUVE score (↑) with 5 prompt masks... For all methods, we use the same set of 2,000 text sequences from the validation set of WikiText-103
  - [Discrete Copula Diffusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/dd1fef536655685898a6602bfbf16857-Paper-Conference.pdf)

### Associated with
- **Knowledge memorization** (constructs)
  > We use fill-in-the-blank style probes (FB) to examine the memory of the original training data related to the unlearning targets. (Section 3.3.1)
  - [RWKU: Benchmarking Real-World Knowledge Unlearning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1f78dfc9ca0156498241012aec4efa0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Cultural text adaptation** (behaviors tasks)
  > We compare the ability of LMs at adapting to cultural contexts in Arabic and English by analyzing their preference for Arab vs. Western entities as [MASK] token fillings of CAMeL-2 contexts. (Section 3.2)
  - [On The Origin of Cultural Biases in Language Models: From Pre-training Data to Linguistic Phenomena](https://aclanthology.org/2025.naacl-long.326.pdf)
