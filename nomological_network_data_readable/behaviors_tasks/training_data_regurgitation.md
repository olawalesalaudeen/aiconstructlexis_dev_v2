# Training data regurgitation
**Type:** Behavior  
**Referenced in:** 27 papers  
**Also known as:** Training data leakage, Verbatim regurgitation, Verbatim Reproduction, Code reproduction, Quotation reproduction, Text reproduction, Literal copying, Secret canary recovery, Exact sequence reproduction, Verbatim recall, Recitation, Copyrighted text generation, Training data extraction, Verbatim memorization, Secret extraction, Verbatim quoting, Text regurgitation, Secret regurgitation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is exact, word-for-word reproduction of training data, or exact substrings and passages from it, in model outputs. Most formulations elicit the behavior with a prefix or related context from the same material and treat success as generating the original continuation, target, or sensitive string; some broaden it to near-verbatim copying, or to private or copyrighted content being exposed or inferred through outputs or internal signals. Most papers therefore treat exact reproduction as the main success criterion, though a smaller line also accepts high overlap or resemblance to the source text.

**Variants.** Papers use several nearby labels, most often verbatim regurgitation or reproduction, training-data extraction, recitation, and quoting. The behavior is studied in code or configuration text, quotations and copyrighted passages, highly duplicated sequences, and sensitive strings such as PII, secrets, or inserted canaries; some tasks ask for exact continuation from a preceding sequence, while others ask for full verbatim recall.

**Space of elicitation and scores.** Papers link it to 2 measurement instruments, AUXDATASET and the Harry Potter dataset. These are used as a proxy corpus for unknown training data and as copyrighted forget data, respectively. Beyond those named instruments, elicitation usually relies on prompting with a prefix or related context, and assessment often centers on exact continuation or substring reproduction, BLEU and ROUGE-L comparisons to source text, and character-level 25-gram membership inference.

**What it is taken as evidence of.** Among linked constructs, the prevailing connection is to Memorization. Several papers claim a causal relationship from Memorization to training data regurgitation, for example by describing verbatim reproduction as stemming from memorization during training, and others treat Memorization as related more broadly to whether a model can regurgitate an example from its training data. Alignment appears less often: one paper claims a causal relationship from Alignment to training data regurgitation, and one linked behavioral indicator, Repetitive generation, is also claimed to have a causal relationship to it.

## Sources

**[A Statistical Approach for Controlled Training Data Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/c859b99b5d717c9035e79d43dfd69435-Paper-Conference.pdf) (as "Training data leakage")**
> The risk or phenomenon where private or copyrighted content from the training corpus is exposed or inferred through the model's outputs or internal signals.

**[Mitigating Memorization in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e50ff94d174465348f15c45760f58f9f-Paper-Conference.pdf) (as "Verbatim regurgitation")**
> The observable act of a language model generating text that is an exact, word-for-word copy of a sequence from its training data.

**[Copyright-Protected Language Generation via Adaptive Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/01953220e4becc6ac1078c24c1f8d3a7-Paper-Conference.pdf) (as "Verbatim Reproduction")**
> Generating exact substrings present in the training data, indicating potential copyright infringement.

**[Measuring memorization in RLHF for code completion](https://proceedings.iclr.cc/paper_files/paper/2025/file/22811d2089d4aa0ba66e52a5e47efb65-Paper-Conference.pdf)**
> Reproducing training examples or their targets in model outputs when prompted with related context.

**[Measuring Non-Adversarial Reproduction of Training Data in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/861777345d8b03ec648e768cd54f1c42-Paper-Conference.pdf) (as "Code reproduction")**
> Generating code or configuration text that matches existing online code snippets.

**[Measuring Non-Adversarial Reproduction of Training Data in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/861777345d8b03ec648e768cd54f1c42-Paper-Conference.pdf) (as "Quotation reproduction")**
> The act of generating verbatim quotations from sources like interviews or movies, sometimes with incorrect or missing attribution.

**[Measuring Non-Adversarial Reproduction of Training Data in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/861777345d8b03ec648e768cd54f1c42-Paper-Conference.pdf) (as "Text reproduction")**
> Producing output that contains verbatim substrings found in existing web text or training-data proxies.

**[Position: Iterative Online-Offline Joint Optimization is Needed to Manage Complex LLM Copyright Risks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pan25i/pan25i.pdf) (as "Literal copying")**
> The act of a model generating content that is a verbatim or near-verbatim copy of copyrighted material.

**[Trustworthy Machine Learning through Data-Specific Indistinguishability](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25h/xiao25h.pdf) (as "Secret canary recovery")**
> The task of a model generating specific secret digits (a 'canary') that were inserted into the training data, when prompted with the prefix of the secret phrase.

**[Trustworthy Machine Learning through Data-Specific Indistinguishability](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25h/xiao25h.pdf) (as "Exact sequence reproduction")**
> The task of a model exactly generating a specific number of subsequent tokens from a training example when prompted with a preceding sequence of tokens from that same example.

**[Minerva: A Programmable Memory Test Benchmark for Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xia25c/xia25c.pdf) (as "Verbatim recall")**
> Reproducing the entire memory content as a verbatim copy.

**[Recite, Reconstruct, Recollect: Memorization in LMs as a Multifaceted Phenomenon](https://proceedings.iclr.cc/paper_files/paper/2025/file/bbd87a328be4c7e43aa0b900a0ebf79a-Paper-Conference.pdf) (as "Recitation")**
> A type of memorization characterized by the verbatim reproduction of sequences that are highly duplicated in the training corpus.

**[LLM Unlearning via Loss Adjustment with Only Forget Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b315c0b736711b56f33cbacfb6d5d67-Paper-Conference.pdf) (as "Copyrighted text generation")**
> Generating passages that overlap with or resemble copyrighted source text given a prefix from that text.

**[Scalable Extraction of Training Data from Aligned, Production Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cce0e917b050208170151f77b497fc71-Paper-Conference.pdf) (as "Training data extraction")**
> The observable act of a model generating verbatim sequences of text from its training data in response to user prompts.

**[Private Memorization Editing: Turning Memorization into a Defense to Strengthen Data Privacy in Large Language Models](https://aclanthology.org/2025.acl-long.810.pdf) (as "Verbatim memorization")**
> The observable behavior of a language model generating text that is an exact, word-for-word copy of examples present in its training data.

**[Teach LLMs to Phish: Stealing Private Information from Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/f206871468dc89cb20fefbc75f2de861-Paper-Conference.pdf) (as "Secret extraction")**
> The observable generation of a sensitive string (e.g., credit card number) by the model when prompted with a prefix, indicating successful retrieval of memorized private information.

**[Verifiable by Design: Aligning Language Models to Quote from Pre-Training Data](https://aclanthology.org/2025.naacl-long.191.pdf) (as "Verbatim quoting")**
> The observable generation of exact text segments from a model's pre-training data, particularly from high-quality sources like Wikipedia, identifiable through n-gram matching.

**[PoisonedParrot: Subtle Data Poisoning Attacks to Elicit Copyright-Infringing Content from Large Language Models](https://aclanthology.org/2025.naacl-long.415.pdf) (as "Text regurgitation")**
> The observable act of the model reproducing content it has previously seen, particularly from its training data.

**[Empirical Privacy Variance](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hu25x/hu25x.pdf) (as "Secret regurgitation")**
> The observable act of a model generating sensitive information (secrets) from its training data in response to a prompt.

## Relationships

### Training data regurgitation →
- **AUXDATASET** (measurements) — *measured_by*
  > To verify the success of our attack, we construct a 9 terabyte dataset (AUXDATASET), combining many sources of Internet text, to serve as a proxy for the unknown training datasets for these production models. (Section 1)
  - [Scalable Extraction of Training Data from Aligned, Production Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cce0e917b050208170151f77b497fc71-Paper-Conference.pdf)
- **Prompt optimization** (behaviors tasks) — *causes*
  > "We propose a black-box prompt optimization method where an attacker LLM agent uncovers higher levels of memorization in a victim agent"
  - [ALPACA AGAINST VICUNA: Using LLMs to Uncover Memorization of LLMs](https://aclanthology.org/2025.naacl-long.421.pdf)

### → Training data regurgitation
- **Memorization** (constructs) — *causes*
  > Since verbatim reproduction often stems from memorization during training
  - [Copyright-Protected Language Generation via Adaptive Model Fusion](https://proceedings.iclr.cc/paper_files/paper/2025/file/01953220e4becc6ac1078c24c1f8d3a7-Paper-Conference.pdf)
- **Alignment** (constructs) — *causes*
  > Model alignment is a guardrail to prevent unwarranted behaviors, including “inadvertent memorization and [...] regurgitation in model outputs.” (Section 2)
  - [Scalable Extraction of Training Data from Aligned, Production Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/cce0e917b050208170151f77b497fc71-Paper-Conference.pdf)
- **Prompt optimization** (behaviors tasks) — *causes*
  > We propose a black-box prompt optimization method where an attacker LLM agent uncovers higher levels of memorization in a victim agent, surpassing traditional approaches that prompt the model directly with training data.
  - [ALPACA AGAINST VICUNA: Using LLMs to Uncover Memorization of LLMs](https://aclanthology.org/2025.naacl-long.421.pdf)
- **Repetitive generation** (behaviors tasks) — *causes*
  > Nasr et al. (2023) first observed that repeated tokens could confuse models, creating a vulnerability exploitable for training data leakage attacks. (Section 5)
  - [Interpreting the Repeated Token Phenomenon in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yona25a/yona25a.pdf)
