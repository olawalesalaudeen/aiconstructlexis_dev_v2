# Llama Guard 2
**Type:** Measurement  
**Referenced in:** 13 papers  
**Also known as:** Llama-Guard-2, Llama-Guard-2-8B, LLaMA Guard 2 8B, LlamaGuard 2  

## State of the Field

**What it is.** Across these papers, the prevailing treatment is as an automated safety classifier and LLM-as-a-judge for judging whether model outputs are safe, unsafe, harmful, or toxic. Definitions commonly describe it as a model fine-tuned from Llama-3-8B, with named variants such as Llama-Guard-2-8B and LLaMA Guard 2 8B, and one definition also describes it as an 8-billion-parameter open-source guard model. Most uses focus on classifying responses or conversations, though some papers additionally use it to identify unsafe documents, derive soft safety scores for rejection sampling, or use its feature layer as a semantic embedding source.

**What it is claimed to measure.** The reported measurement claims are concentrated rather than spread across many targets: papers link it to 1 construct and 2 behavioral indicators. The prevailing usage is to measure Safety, for example by classifying responses or conversations as safe or unsafe and by reporting unsafe response rates; a smaller line of work reports it as measuring Harmful content generation, including attack success rate based on output safety, and Jailbreaking, by classifying responses as jailbreak or non-jailbreak.

**Space of uses.** No measurement instrument is linked to it, and papers instead mention companion evaluators such as GPT-4, Perspective API, and ArmoRM. Across uses, it is positioned mainly as an automated judge or auto-annotator for red-teaming, harmfulness detection, data filtering, alignment training, and rejection sampling; some papers also use it as a defense check against jailbreaks or as a source of semantic embeddings.

## Sources

**[Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf) (as "Llama-Guard-2")**
> A safety classifier model fine-tuned from Llama-3-8B, used as an LLM-as-a-judge to evaluate the harmfulness of model responses.

**[Broaden your SCOPE! Efficient Multi-turn Conversation Planning for LLMs with Semantic Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/32e41d6b0a51a63a9a90697da19d235d-Paper-Conference.pdf)**
> A model used as the semantic embedding source and to measure how safe or harmful a conversation is.

**[Forewarned is Forearmed:  Harnessing LLMs for Data Synthesis via Failure-induced Exploration](https://proceedings.iclr.cc/paper_files/paper/2025/file/1cded4f97cf5f01a284c574110b7e3b9-Paper-Conference.pdf) (as "Llama-Guard-2-8B")**
> A specialized language model used as an automated judge to classify the toxicity of model outputs for safety red-teaming evaluations.

**[FlipAttack: Jailbreak LLMs via Flipping](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25z/liu25z.pdf) (as "LLaMA Guard 2 8B")**
> An 8-billion parameter open-source guard model (version 2) used as an instrument to evaluate the effectiveness of jailbreak attacks at bypassing safety filters.

## Relationships

### → Llama Guard 2
- **Safety** (constructs) — *measured_by*
  > In our experiments, we use Llama Guard 2 (Meta, 2024) to measure how safe (conversely, how harmful) a conversation is. (Section 6.1)
  - [Broaden your SCOPE! Efficient Multi-turn Conversation Planning for LLMs with Semantic Space](https://proceedings.iclr.cc/paper_files/paper/2025/file/32e41d6b0a51a63a9a90697da19d235d-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > To compute attack success rate, we use three LLM-as-a-judge models that are fine-tuned to assess output safety: ... the Llama-Guard-2 safety classifier... (Section 5)
  - [Robust LLM safeguarding via refusal feature adversarial training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1022661f3f43406065641f16ce25eafa-Paper-Conference.pdf)
- **Jailbreaking** (behaviors tasks) — *measured_by*
  > We use Llama Guard 2 as the auto-annotator to classify responses as jailbreak or non-jailbreak, following (Chao et al., 2024). (Section 3.3.4. ADVERSARIAL ROBUSTNESS EVALUATION)
  - [POROver: Improving Safety and Reducing Overrefusal in Large Language Models with Overgeneration and Preference Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/karaman25a/karaman25a.pdf)
