# Lost-in-the-middle
**Type:** Behavior  
**Referenced in:** 11 papers  
**Also known as:** Lost-in-the-middle phenomenon, Lost-in-the-middle effect, Token shifting, Serial position effect  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is a position-sensitive drop in performance when relevant information falls in the middle of an input rather than near the beginning or end. Most definitions describe this in retrieval terms, as degraded retrieval accuracy or lower recall for mid-positioned content, and one paper reports a U-shaped pattern over answer position, with the beginning slightly better than the end. Some authors instead describe the behavior through output errors, calling it token shifting when incorrect tokens at critical positions trigger retrieval failure, while another paper uses the label serial position effect for higher answer accuracy near the start and very end of a list than in the middle.

**Variants.** Papers study the behavior in long-input retrieval, long-context evaluation, and list-based response settings. One line of work focuses on recall for queries linked to chunks in the middle of the input, with a sharper drop at the leaf level, while another focuses on critical output positions where an erroneous token replaces the correct one and retrieval fails. The recorded names vary, including lost-in-the-middle phenomenon, lost-in-the-middle effect, token shifting, and serial position effect.

**Space of elicitation and scores.** No measurement instrument is linked to it. Instead, one paper reports that long-context understanding is measured by Lost-in-the-middle, used alongside LongChat-Lines, but no separate elicitation or scoring instrument is recorded as linked to the behavior.

**What it is taken as evidence of.** Three constructs are linked to it, and the prevailing construct connection is to Long-context understanding. Papers relate Lost-in-the-middle to long-context capability, one paper reports that long-context understanding is measured by it, and another claims a causal relationship from Lost-in-the-middle to Long-context understanding, stating that the phenomenon degrades performance with increasing context length. The other construct links are recorded as related: Positional bias is linked through papers that describe lost-in-the-middle as a pathology or manifestation of position bias, and Context utilization is linked through claims that models unevenly use lengthy inputs and tend to overlook the middle portion.

## Sources

**[On the Emergence of Position Bias in Transformers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25ad/wu25ad.pdf) (as "Lost-in-the-middle phenomenon")**
> The observable degradation in a model's performance, particularly in retrieval tasks, when relevant information is located in the middle of the input context compared to the beginning or end.

**[Towards a Holistic and Automated Evaluation Framework for Multi-Level Comprehension of LLMs in Book-Length Contexts](https://aclanthology.org/2025.emnlp-main.1241.pdf) (as "Lost-in-the-middle effect")**
> A failure mode where models underperform on information located in the middle portion of long inputs, leading to lower recall for mid-positioned content.

**[POSITION BIAS MITIGATES POSITION BIAS: Mitigate Position Bias Through Inter-Position Knowledge Distillation](https://aclanthology.org/2025.emnlp-main.78.pdf) (as "Token shifting")**
> The observable phenomenon where a model generates incorrect tokens at critical positions in the output sequence due to the position of the relevant input information, leading to retrieval failure.

**[Position: Principles of Animal Cognition to Improve LLM Evaluations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/rane25a/rane25a.pdf) (as "Serial position effect")**
> A pattern of performance in which a model is more accurate when responding to items at the beginning or end of a sequence compared to those in the middle, mirroring a well-documented cognitive bias in humans and animals.

## Relationships

### Lost-in-the-middle →
- **Long-context understanding** (constructs) — *causes*
  > the “lost in the middle” (Liu et al., 2024c; Song et al., 2024) phenomenon degrades performance with increasing context length (Section 1).
  - [CoMemo: LVLMs Need Image Context with Image Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bn/liu25bn.pdf)

### Associated with
- **Positional bias** (constructs)
  > “We observed significant positional bias in LMMs, reminiscent of the ‘lost-in-the-middle’ pathology found in NLP tasks”
  - [Visual Haystacks: A Vision-Centric Needle-In-A-Haystack Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/a264726ebd222124514a32bf0143b83d-Paper-Conference.pdf)
- **Context utilization** (constructs)
  > Despite the extended context window, LLMs still face a significant challenge in long-context inference due to the uneven utilization of lengthy inputs. [15] conducted a pivotal investigation, revealing that LLMs tend to overlook the middle portion of the input. (Section 2.2)
  - [Found in the Middle: How Language Models Use Long Contexts Better via Plug-and-Play Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/6ffdbbe354893979367f93e2121e37dd-Paper-Conference.pdf)
